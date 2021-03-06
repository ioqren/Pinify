# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  first_name      :string
#  last_name       :string
#  img_url         :string
#

class User < ApplicationRecord
    validates :username, :email, :session_token, presence: true, uniqueness: true
    validates :password, length: { minimum: 6, allow_nil: true }
    
    has_many :boards,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :Board

    has_many :pins,
        through: :boards,
        source: :pins

    has_many :followers,
        primary_key: :id,
        foreign_key: :follower_id,
        class_name: :Follow

    has_many :follows,
        primary_key: :id,
        foreign_key: :followed_id,
        class_name: :Follow

    has_one_attached :photo
    attr_writer :photoUrl

    before_validation :ensure_session_token

    attr_reader :password

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        user && user.is_password?(password) ? user : nil
    end

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64
        self.save!
        self.session_token
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end
end
