const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require ('body-parser');

app.use(bodyParser.json());
app.use(cors());

app.listen(3000, function () {
  console.log(`App running on port ${this.address().port }`);
});
