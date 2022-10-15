class Personnel < ApplicationRecord
    has_many :bookings
    has_many :customers, through: :bookings
    # belongs_to :profile
end
