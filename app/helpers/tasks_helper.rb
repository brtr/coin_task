module TasksHelper
  def time_format(datetime)
    if datetime
      datetime.strftime("%Y-%m-%d %H:%M:%S")
    else
      ""
    end
  end
end
