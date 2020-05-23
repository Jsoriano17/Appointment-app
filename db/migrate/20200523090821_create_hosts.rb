class CreateHosts < ActiveRecord::Migration[6.0]
  def change
    create_table :hosts do |t|
      t.string :name
      t.time :open
      t.time :closed
      t.string :weekdays
      t.string :phone
      t.string :street_address
      t.string :city
      t.string :state
      t.integer :zip
      t.string :country
      t.string :img
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
