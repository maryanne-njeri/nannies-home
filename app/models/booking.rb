class Booking < ApplicationRecord
    belongs_to :personnel
    belongs_to :customer
end
