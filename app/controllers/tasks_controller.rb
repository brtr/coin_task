class TasksController < ApplicationController
  before_action :get_task, only: [:take, :complete]

  def index
    @tasks = Task.order(created_at: :desc).page(params[:page]).per(20)
  end

  def create
    task = Task.new(task_params)

    if task.save
      result = {success: true, task_id: task.id}
    else
      result = {success: false, error: task.errors.full_messages.join(', ')}
    end

    render json: result
  end

  def take
    @task.receiver = params[:receiver]
    @task.taken!

    redirect_to tasks_path, notice: "领取任务成功"
  end

  def complete
    @task.completed_at = Time.now
    @task.done!

    redirect_to tasks_path, notice: "任务已完成"
  end

  private
  def task_params
    params.require(:task).permit(:title, :description, :reward, :publisher, :receiver)
  end

  def get_task
    @task = Task.find params[:id]
  end
end
