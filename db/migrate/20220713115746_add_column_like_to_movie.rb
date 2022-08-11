class AddColumnLikeToMovie < ActiveRecord::Migration[6.1]
  def change
    add_column :movies, :like, :integer, default: 0
  end
end
