class User < ApplicationRecord
    has_one :customer
    validates :username, presence: true, uniqueness: true 

    has_secure_password
    
end
