class Bookmark < ApplicationRecord
  belongs_to :movie
  belongs_to :list
  validates :movie, uniqueness: { scope: :list_id, message: 'is already in the list' }
end
