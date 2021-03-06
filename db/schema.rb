# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_12_03_183837) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "champs", force: :cascade do |t|
    t.string "name"
    t.integer "health"
    t.integer "power"
    t.string "align"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "henchmen", force: :cascade do |t|
    t.string "name"
    t.integer "intel"
    t.bigint "villain_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["villain_id"], name: "index_henchmen_on_villain_id"
  end

  create_table "moves", force: :cascade do |t|
    t.string "name"
    t.string "desc"
    t.integer "dmg"
    t.string "element"
    t.bigint "champ_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["champ_id"], name: "index_moves_on_champ_id"
  end

  create_table "villains", force: :cascade do |t|
    t.string "name"
    t.string "slogan"
    t.integer "evil"
    t.integer "health"
    t.string "icon"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "henchmen", "villains"
  add_foreign_key "moves", "champs"
end
