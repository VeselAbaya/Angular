const express = require('express');
const router = express.Router();

var images_initial_array = [
  {
    id: 1,
    name: 'fjords.jpg',
    // date: new Date(),
    src: '~/studying/programming/web_leti/gallery/server/img/fjords.jpg'
  },
  {
    id: 2,
    name: 'o-panorama.jpg',
    // date: new Date(),
    src: '~/studying/programming/web_leti/gallery/server/img/o-panorama.jpg'
  }
];

router.get('/', (req, res) => {
  console.log('kek');
  res.status(200).json(images_initial_array);
});

router.get('/:id', (req, res) => {
  const image = images_initial_array.find(img => img.id = req.params.id);
  if (image) {
    res.status(200).json(image);
  } else {
    res.status(404).end();
  }
});

router.post('/', (req, res) => {
  const new_image = req.body;
  if (!new_image.id || images_initial_array.find(img => img.id == new_image.id) ||
       new_image.title.length < 5) {
      res.status(400).end();
  } else {
      images_initial_array.push(
        {
          id: new_image.id,
          title: new_image.title,
          // date: new_image.date,
          src: new_image.src
        });
      res.status(201).json(images_initial_array[images_initial_array.length - 1]);
  }
});

router.put(':/id', (req, res) => {
  const indexToChange = images_initial_array.findIndex(img => img.id == req.params.id);
  console.log(req.body);
  if (indexToChange < 0) {
    res.status(400).end();
  } else {
    images_initial_array[indexToChange].title = req.body.title;
    // images_initial_array[indexToChange].date = req.body.date;
    images_initial_array[indexToChange].src = req.body.src;
    res.status(200).json(images_initial_array[indexToChange]);
  }
});

router.delete('/?id', (req, res) => {
  const indexToDelete = images_initial_array.findIndex(img => img.id == req.body.id);
  if (indexToDelete < 0) {
    res.status(400).end();
  } else {
    images_initial_array.splice(indexToDelete, 1);
    res.status(200).end();
  }
});

module.exports = router;

