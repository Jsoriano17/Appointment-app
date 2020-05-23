class Employee < ApplicationRecord
  belongs_to :host
  has_many :appointments
end
