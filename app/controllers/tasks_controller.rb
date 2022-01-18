class TasksController < ApplicationController
  before_action :get_task, except: [:index, :create]

  def index
    @tasks = Task.order(created_at: :desc)
    @tasks = @tasks.where(status: params[:status]) if params[:status]
    @tasks.page(params[:page]).per(20)
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
    @task.audit!

    redirect_to tasks_path, notice: "任务已完成"
  end

  def confirm
    @task.completed_at = Time.now
    @task.done!

    redirect_to tasks_path, notice: "任务已确认"
  end

  def update
    if @task.update(task_params)
      flash[:notice] = "任务已更新"
    else
      flash[:alert] = @task.errors.full_messages.join(', ')
    end

    redirect_to tasks_path
  end

  def destroy
    if @task.submitted? && @task.destroy
      flash[:alert] = "发布任务失败，请重试"
    else
      flash[:alert] = @task.errors.full_messages.join(', ')
    end

    redirect_to tasks_path
  end

  private
  def task_params
    params.require(:task).permit(:title, :description, :reward, :publisher, :receiver)
  end

  def get_task
    @task = Task.find params[:id]
  end
end
