const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient; ('body-parser');
const createRouter = require('./helpers/create_router.js')

app.use(bodyParser.json());
app.use(cors());

MongoClient.connect('mongodb://localhost:27017')
.then((client) => {
  const db = client.db('films');
  const filmCollection = db.collection('films');
  const filmsRouter = createRouter(filmCollection);
  app.use('/api/films', filmsRouter)
})

.catch(console.error);

app.listen(3000, function () {
  console.log(`App running on port ${this.address().port }`);
});
