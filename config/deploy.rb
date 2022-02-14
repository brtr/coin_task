# config valid for current version and patch releases of Capistrano
lock "~> 3.16.0"

set :application, "coin_task"
set :repo_url, "git@github.com:brtr/coin_task.git"

# Default branch is :master
ask :branch, `git rev-parse --abbrev-ref HEAD`.chomp

# Default deploy_to directory is /var/www/my_app_name
set :deploy_to, "/home/deploy/app/coin_task"

set :linked_files, fetch(:linked_files, []).push('config/application.yml')
set :linked_dirs, fetch(:linked_dirs, []).push('log', 'tmp/pids', 'tmp/cache', 'tmp/sockets', 'vendor/bundle', 'public/system', 'public/uploads')
set :puma_config_path, -> { File.join(current_path, "config", "puma_production.rb") }

set :pty, false

set :rails_env, fetch(:staging)
set :rbenv_type, :user # or :system, depends on your rbenv setup
set :rbenv_ruby, '3.0.1'
set :rbenv_prefix, "RBENV_ROOT=#{fetch(:rbenv_path)} RBENV_VERSION=#{fetch(:rbenv_ruby)} #{fetch(:rbenv_path)}/bin/rbenv exec"
set :rbenv_map_bins, %w{rake gem bundle ruby rails}
set :bundler_path, "/home/deploy/.rbenv/shims/bundle"

set :puma_config_path, -> { File.join(current_path, "config", "puma_production.rb") }

# for assets
set :assets_role, :web

set :keep_assets, 2

set :bundler_path, "/home/deploy/.rbenv/shims/bundle"

namespace :deploy do
  after :publishing, 'web:restart'
  after :finishing, :cleanup
end

namespace :web do
  task :setup_config do
    on roles(:web) do
      upload_systemd_config('web')
    end
  end

  task :setup_socket do
    on roles(:web) do
      upload_systemd_config('web', 'socket')
      execute :systemctl, "--user", "start", "web-#{fetch(:application)}.socket"
    end
  end

  task :stop do
    on roles(:web) do
      execute :systemctl, "--user", "stop", "web-#{fetch(:application)}.service"
    end
  end

  task :restart do
    on roles(:web) do
      execute :systemctl, "--user", "restart", "web-#{fetch(:application)}.service"
    end
  end
end

def upload_systemd_config(app, type = 'service')
  template = File.read("config//deploy/templates/#{app}.#{type}.capistrano.erb")
  systemd_path = fetch(:service_unit_path, fetch_systemd_unit_path)
  execute :mkdir, "-p", systemd_path
  upload!(
    StringIO.new(ERB.new(template).result(binding)),
    "#{systemd_path}/#{app}-#{fetch(:application)}.#{type}"
  )
  execute :systemctl, "--user", "daemon-reload"
  execute :systemctl, "--user", "enable", "#{app}-#{fetch(:application)}.#{type}"
end

def fetch_systemd_unit_path
  home_dir = capture :pwd
  File.join(home_dir, ".config", "systemd", "user")
end

