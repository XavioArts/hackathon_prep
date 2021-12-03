class CreateVillains < ActiveRecord::Migration[6.1]
  def change
    create_table :villains do |t|
      t.string :name
      t.string :slogan
      t.integer :evil
      t.integer :health
      t.string :icon

      t.timestamps
    end
  end
end
