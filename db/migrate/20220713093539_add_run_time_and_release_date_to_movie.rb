class AddRunTimeAndReleaseDateToMovie < ActiveRecord::Migration[6.1]
  def change
    add_column :movies, :runtime, :integer
    add_column :movies, :release_date, :string
    add_column :movies, :revenue, :integer
  end
end
