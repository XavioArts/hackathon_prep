class CreateChamps < ActiveRecord::Migration[6.1]
  def change
    create_table :champs do |t|
      t.string :name
      t.integer :health
      t.integer :power
      t.string :align

      t.timestamps
    end
  end
end
