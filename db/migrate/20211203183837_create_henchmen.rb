class CreateHenchmen < ActiveRecord::Migration[6.1]
  def change
    create_table :henchmen do |t|
      t.string :name
      t.integer :intel
      t.belongs_to :villain, null: false, foreign_key: true

      t.timestamps
    end
  end
end
