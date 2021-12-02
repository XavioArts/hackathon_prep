class CreateMoves < ActiveRecord::Migration[6.1]
  def change
    create_table :moves do |t|
      t.string :name
      t.string :desc
      t.integer :dmg
      t.string :element
      t.belongs_to :champ, null: false, foreign_key: true

      t.timestamps
    end
  end
end
