class AddColumnIdApiToMovie < ActiveRecord::Migration[6.1]
  def change
    add_column :movies, :id_api, :integer
  end
end
