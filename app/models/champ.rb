class Champ < ApplicationRecord
    has_many :moves, dependent: :destroy
end
