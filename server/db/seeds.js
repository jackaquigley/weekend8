use films;
db.dropDatabase();

db.films.insertMany([
  {
    title: "Battle Royale",
    genre: "Horror",
    rating: "18",
    release_date: "2000",
    runtime: "140 Mins",
    crew: {
      director: "	Kinji Fukasaku",
      producers:
      [
      "Masao Sato",
      "Masumi Okada",
      "Teruo Kamaya",
      "Tetsu Kayama"
      ]
          }
  },
  {
    title: "Zoolander",
    genre: "Comedy",
    rating: 18,
    runtime: "50 Mins",
    crew: {
      director: "Bob",
      producers:
      [
        "Bobert",
        "Okay"
      ]
    }
  }
])
