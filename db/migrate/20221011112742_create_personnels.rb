class CreatePersonnels < ActiveRecord::Migration[7.0]
  def change
    create_table :personnels do |t|
      t.string :first_name
      t.string :last_name
      t.string :sex
      t.string :age
      t.string :hourly_billing_rate
      t.string :primary_phone_number
      t.string :primary_email_address

      t.timestamps
    end
  end
end
