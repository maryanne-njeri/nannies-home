class CreateProfiles < ActiveRecord::Migration[7.0]
  def change
    create_table :profiles do |t|
      t.string :image_url
      t.string :biography
      t.integer :years_experience
      t.string :secondary_phone_number
      t.string :secondary_email_address
      t.string :personnel_id
      t.integer :rating

      t.timestamps
    end
  end
end
