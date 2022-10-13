class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.string :customer_id
      t.string :review

      t.timestamps
    end
  end
end
