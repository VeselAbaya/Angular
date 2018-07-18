const express      = require('express');
const path         = require('path');
const cookieParser = require('cookie-parser');
const bodyParser   = require('body-parser');
const mongoose     = require('mongoose');
const dbName       = 'galleryDB';

const app = express();

const images = require('./routes/images');

//BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/images', images);
app.all('*', function(req, res) {
  console.log("Not api or files request. Returning index.html");
  res.status(200).sendFile(path.join(__dirname, 'index.html'));
});

mongoose.connect('mongodb://localhost/' + dbName);
const db = mongoose.connection;
db.on('error', console.error);
db.once('open', startServer);

function startServer() {
  app.set('port', (process.env.PORT || 3000));
  app.listen(app.get('port'), function() {
    console.log('Server started at port ' + app.get('port'));
  });
}
