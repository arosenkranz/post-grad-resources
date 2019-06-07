# USER SEEDS
users = [
  {username: "Hermione_Granger"},
  {username: "Jon_Snow"}
]

users.each do |u|
  User.create(u)
end

# MOVIE SEEDS
movies = [
  {
    movie_name: "Harry Potter and the Sorcerer's Stone",
    movie_poster: "https://i.etsystatic.com/14042790/r/il/4d2bd6/1472004550/il_570xN.1472004550_8he8.jpg",
    movie_year: "2001"
  }
]

movies.each do |u|
  Movie.create(u)
end