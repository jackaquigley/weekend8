const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require ('body-parser');
const createRouter = require('./helpers/create_router.js')

const films = [
  {name: 'Battle Royale', genre: "Horror", rating: '18', release_date: '2000', runtime: 130}
]

app.use(bodyParser.json());
app.use(cors());

const filmsRouter = createRouter(films);
app.use('/api/films', filmsRouter)

app.listen(3000, function () {
  console.log(`App running on port ${this.address().port }`);
});
