# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'
oldDb = Champ.all.length

Champ.destroy_all
# make sure all champs and moves are deleted first
puts "#{oldDb} champions deleted"

3.times do
    name1 = Faker::JapaneseMedia::OnePiece.character
    name2 = Faker::Games::WorldOfWarcraft.hero
    name3 = Faker::Fantasy::Tolkien.character

    champ1 = Champ.create(
        name: name1,
        health: rand(500),
        power: rand(10000),
        align: Faker::Games::DnD.alignment,
    )
    3.times do
        champ1.moves.create(
            name: Faker::Games::Pokemon.move,
            element: Faker::Science.element,
            dmg: rand(4200),
            desc: Faker::TvShows::AquaTeenHungerForce.quote,
        )
    end

    champ2 = Champ.create(
        name: name2,
        health: rand(500),
        power: rand(10000),
        align: Faker::Games::DnD.alignment,
    )
    3.times do
        champ2.moves.create(
            name: Faker::Games::Pokemon.move,
            element: Faker::Science.element,
            dmg: rand(4200),
            desc: Faker::TvShows::AquaTeenHungerForce.quote,
        )
    end

    champ3 = Champ.create(
        name: name3,
        health: rand(500),
        power: rand(10000),
        align: Faker::Games::DnD.alignment,
    )
    3.times do
        champ3.moves.create(
            name: Faker::Games::Pokemon.move,
            element: Faker::Science.element,
            dmg: rand(4200),
            desc: Faker::TvShows::AquaTeenHungerForce.quote,
        )
    end

end

puts "seeded #{Champ.all.length} champions"