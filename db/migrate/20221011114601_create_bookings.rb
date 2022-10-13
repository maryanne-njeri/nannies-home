class CreateBookings < ActiveRecord::Migration[7.0]
  def change
    create_table :bookings do |t|
      t.string :personnel_id
      t.string :customer_id
      t.string :date
      t.string :time
      t.boolean :fulfilled

      t.timestamps
    end
  end
end
