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

# CREATION FILM TOP RATED

url = "http://tmdb.lewagon.com/movie/top_rated"
1.times do |i|
  movies = JSON.parse(URI.open("#{url}?page=#{i + 1}").read)['results']
  movies.each do |movie|
    puts "Creating #{movie['title']}"
    base_poster_url = "https://image.tmdb.org/t/p/original"
    Movie.create(
      title: movie['title'],
      overview: movie['overview'],
      poster_url: "#{base_poster_url}#{movie['backdrop_path']}",
      rating: movie['vote_average'],
      vote_count: movie['vote_count'],
      category: 'rated'
    )
  end
end

# CREATION FILM POPULAR

url = "http://tmdb.lewagon.com/movie/popular"
1.times do |i|
  movies = JSON.parse(URI.open("#{url}?page=#{i + 1}").read)['results']
  movies.each do |movie|
    puts "Creating #{movie['title']}"
    base_poster_url = "https://image.tmdb.org/t/p/original"
    Movie.create!(
      title: movie['title'],
      overview: movie['overview'],
      poster_url: "#{base_poster_url}#{movie['backdrop_path']}",
      rating: movie['vote_average'],
      vote_count: movie['vote_count'],
      category: 'popular'
    )
  end
end

# CREATION FILM AU CINEMA

url = "http://tmdb.lewagon.com/movie/now_playing"
1.times do |i|
  movies = JSON.parse(URI.open("#{url}?page=#{i + 1}").read)['results']
  movies.each do |movie|
    puts "Creating #{movie['title']}"
    base_poster_url = "https://image.tmdb.org/t/p/original"
    Movie.create!(
      title: movie['title'],
      overview: movie['overview'],
      poster_url: "#{base_poster_url}#{movie['backdrop_path']}",
      rating: movie['vote_average'],
      vote_count: movie['vote_count'],
      category: 'now_playing'
    )
  end
end

# CREATION FILM A VENIR

url = "http://tmdb.lewagon.com/movie/upcoming"
1.times do |i|
  movies = JSON.parse(URI.open("#{url}?page=#{i + 1}").read)['results']
  movies.each do |movie|
    puts "Creating #{movie['title']}"
    base_poster_url = "https://image.tmdb.org/t/p/original"
    Movie.create!(
      title: movie['title'],
      overview: movie['overview'],
      poster_url: "#{base_poster_url}#{movie['backdrop_path']}",
      rating: movie['vote_average'],
      vote_count: movie['vote_count'],
      category: 'upcoming'
    )
  end
end

puts 'Movies created'
puts 'Finished!'
