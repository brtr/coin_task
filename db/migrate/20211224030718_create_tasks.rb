class CreateTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :tasks do |t|
      t.integer  :status
      t.string   :publisher
      t.string   :receiver
      t.string   :title
      t.text     :description
      t.text     :remark
      t.decimal  :reward, precision: 10, scale: 0
      t.datetime :completed_at

      t.timestamps
    end
  end
end
