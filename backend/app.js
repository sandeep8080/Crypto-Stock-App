var express = require('express');
var path = require('path');
const cors = require('cors');

var routes = require('./routes/index');
var app = express();
const port = process.env.PORT || 5000;

// app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use('/', routes);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})

module.exports = app;
