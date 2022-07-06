class AddVoteCountToMovies < ActiveRecord::Migration[6.1]
  def change
    add_column :movies, :vote_count, :integer
  end
end
