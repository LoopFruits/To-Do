class User < ApplicationRecord
    has_many :todos

    has_secure_password

    #validations for user signup
    validates :username, presence: true, uniqueness: true
    validates :password, length: { in: 5..15 }

end
