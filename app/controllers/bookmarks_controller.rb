class BookmarksController < ApplicationController
  def create
    @bookmark = Bookmark.new(bookmark_params)
    @movie = Movie.find(params[:movie_id])
    @bookmark.movie_id = @movie.id
    @list = @bookmark.list
    if @bookmark.save!
      redirect_to list_path(@list)
    else
      render :new
    end
  end

  def destroy
    @bookmark = Bookmark.find(params[:id])
    @bookmark.destroy
  end

  private

  def bookmark_params
    params.require(:bookmark).permit(:comment, :movie_id, :list_id)
  end
end
