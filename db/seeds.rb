# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'
require 'json'

puts 'Cleaning up database...'
Movie.destroy_all
puts 'Database cleaned'

base_poster_url = 'https://image.tmdb.org/t/p/original'

# CREATION FILM AU CINEMA

url = 'http://tmdb.lewagon.com/movie/now_playing'
1.times do |i|
  movies = JSON.parse(URI.open("#{url}?page=#{i + 1}").read)['results']
  movies.each do |movie|
    Movie.create(
      id_api: movie['id'],
      category: 'now_playing'
    )
  end
end

# CREATION FILM A VENIR

url = "http://tmdb.lewagon.com/movie/upcoming"
1.times do |i|
  movies = JSON.parse(URI.open("#{url}?page=#{i + 1}").read)['results']
  movies.each do |movie|
    next if Movie.where(id_api: movie['id']).count.positive?

    Movie.create(
      id_api: movie['id'],
      category: 'upcoming'
    )
  end
end

# CREATION FILM TOP RATED

url = "http://tmdb.lewagon.com/movie/top_rated"
1.times do |i|
  movies = JSON.parse(URI.open("#{url}?page=#{i + 1}").read)['results']
  movies.each do |movie|
    next if Movie.where(id_api: movie['id']).count.positive?

    Movie.create(
      id_api: movie['id'],
      category: 'rated'
    )
  end
end

# CREATION FILM POPULAR

url = "http://tmdb.lewagon.com/movie/popular"
1.times do |i|
  movies = JSON.parse(URI.open("#{url}?page=#{i + 1}").read)['results']
  movies.each do |movie|
    next if Movie.where(id_api: movie['id']).count.positive?

    Movie.create(
      id_api: movie['id'],
      category: 'popular'
    )
  end
end

# ON AFFECTE LES DONNEES GRACE A L'ID de chaque film

url = 'http://tmdb.lewagon.com/movie/'

movies = Movie.all

movies.each do |m|
  movie = JSON.parse(URI.open("#{url}#{m.id_api}").read)
  m.title = movie['title']
  m.overview = movie['overview']
  m.poster = "#{base_poster_url}#{movie['poster_path']}"
  m.poster_url = "#{base_poster_url}#{movie['backdrop_path']}"
  m.rating = movie['vote_average'] / 2
  m.vote_count = movie['vote_count']
  m.runtime = movie['runtime']
  m.release_date = movie['release_date']
  m.revenue = movie['revenue']
  m.genres = movie['genres'].map { |genre| genre['name'] }

  casting = JSON.parse(URI.open("#{url}#{m.id_api}/credits").read)
  m.cast = casting['cast'].first(5).map { |actor| actor['name'] }
  m.cast_image_url = casting['cast'].first(5).map { |image| "#{base_poster_url}#{image['profile_path']}" }
  m.save
end

puts 'Movies created'
puts 'Finished!'
