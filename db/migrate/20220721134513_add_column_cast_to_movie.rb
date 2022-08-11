class AddColumnCastToMovie < ActiveRecord::Migration[6.1]
  def change
    add_column :movies, :cast, :string
    add_column :movies, :cast_image_url, :string
  end
end
