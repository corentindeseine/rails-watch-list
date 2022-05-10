require 'open-uri'

class MoviesController < ApplicationController
  def home
    @movies = Movie.all
    @bookmark = Bookmark.new
  end

  def show
    @movie = Movie.find(params[:id])
    @bookmark = Bookmark.new
    @bookmark.movie = @movie
  end

  def index
    if params[:query].present?
      @movies = Movie.where('title ILIKE ?', "%#{params[:query]}%")
    else
      @movies = Movie.all
    end
  end

  private

  def bookmark_params
    params.require(:bookmark).permit(:movie_id, :list_id)
  end
end
