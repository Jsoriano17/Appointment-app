class Host < ApplicationRecord
  belongs_to :user
  has_many :employees
end
