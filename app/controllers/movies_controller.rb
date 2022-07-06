require 'open-uri'

class MoviesController < ApplicationController

  def home
    @movies = Movie.all
    @movies_current = Movie.where(category: 'now_playing')
    @movies_upcoming = Movie.where(category: 'upcoming')
    @movies_popular = Movie.where(category: 'popular')
    @movies_rated = Movie.where(category: 'rated')
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
