class Villain < ApplicationRecord
    has_many :henchmen, dependent: :destroy
end
