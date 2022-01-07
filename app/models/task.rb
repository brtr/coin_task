class Task < ApplicationRecord
  validates :title, :description, :reward, :publisher, presence: :true
  enum status: [:submitted, :taken, :audit, :done]

  before_create :generate_status

  private
  def generate_status
    self.status = :submitted
  end
end
