require 'open-uri'

class MoviesController < ApplicationController

  def home
    @movies = Movie.all
    @movies_liked = Movie.where(like: 1)
    @movies_current = Movie.where(category: 'now_playing')
    @movies_upcoming = Movie.where(category: 'upcoming')
    @movies_top_rated = Movie.where(category: 'rated')
    @movies_popular = Movie.where(category: 'popular')
    @bookmark = Bookmark.new
  end

  def show
    @movie = Movie.find(params[:id])
    @bookmark = Bookmark.new
    @lists = List.all
  end

  def index
    @movies = Movie.all
    sql_query = 'title ILIKE :query OR genres ILIKE :query'
    @movies = @movies.where(sql_query, query: "%#{params[:query]}%") if params[:query].present?
    respond_to do |format|
      format.html # Follow regular flow of Rails
      format.text { render partial: 'list', locals: { movies: @movies }, formats: [:html] }
    end
  end

  def update
    @movie = Movie.find(params[:id])
    if @movie.like.zero?
      @movie.update(like: 1)
    else
      @movie.update(like: 0)
    end
    redirect_to movie_path(@movie)

  end

  private

  def bookmark_params
    params.require(:bookmark).permit(:movie_id, :list_id)
  end
end
