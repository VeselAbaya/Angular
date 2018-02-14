const express     = require('express');
const router      = express.Router();
const MongoClient = require('mongodb').MongoClient;
const url         = "mongodb://localhost:27017/";

router.get('/', function(req, res) {
  MongoClient.connect(url, function(err, database) {
    if (err) { console.error(err); }
    let db = database.db('galleryDB');
    db.collection('images').find().toArray(function(err, data) {
      if (err) { console.error(err); }
      res.status(200).json(data);
      database.close();
    });
  });
});

router.get('/:id', function(req, res) {
  MongoClient.connect(url, function(err, database) {
    if (err) { console.error(err); }
    let db = database.db('galleryDB');
    db.collection('images').find().toArray(function(err, data) {
      if (err) { console.error(err); }
      const image = data.find(img => img.id === req.params.id);
      if (image) {
        res.status(200).json(image);
      } else {
        res.status(404).end();
      }

      database.close();
    });
  });
});

router.post('/', function(req, res) {
  const new_image = req.body;

  if (!new_image.id || data.find(img => img.id === new_image.id) ||
       new_image.title.length < 5) {
    res.status(400).end();
  } else {
    MongoClient.connect(url, function(err, database) {
      if (err) { console.error(err); }
      let db = database.db('galleryDB');
      db.collection('images').insertOne(new_image, function(err, data) {
        if (err) { console.error(err); }
        console.log("1 document inserted");
        res.status(201).json(new_image);
        database.close();
      });
    });
  }
});

router.put(':/id', function(req, res) {
  MongoClient.connect(url, function (err, database) {
    if (err) { console.error(err); }
    let db = database.db('galleryDB');
    db.collection('images').updateOne({id: req.params.id}, req.body, function (err, data) {
      if (err) { console.error(err); }
      console.log("1 document updated");
      console.log(req.body);
      database.close();
    });
  });
});

router.delete('/?id', function(req, res) {
  MongoClient.connect(url, function(err, database) {
    if (err) { console.error(err); }
    let db = database.db('galleryDB');
    db.collection('images').deleteOne({id: req.params.id}, function(err, data) {
      if (err) { console.error(err); }
      console.log('1 document deleted');
      res.status(200).end();
      database.close()
    });
  });
});

module.exports = router;
