const express = require('express');
const router = express.Router();

var images_initial_array = [
  {
    id: 1,
    name: 'fjords.jpg',
    date: new Date(),
    src: '~/studying/programming/web_leti/gallery/server/img/fjords.jpg'
  },
  {
    id: 2,
    name: 'o-panorama.jpg',
    date: new Date(),
    src: '~/studying/programming/web_leti/gallery/server/img/o-panorama.jpg'
  }
];

router.get('/', (req, res) => {
  console.log('kek');
  res.status(200).json(images_initial_array);
});

module.exports = router;

