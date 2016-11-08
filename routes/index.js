/*jshint esversion: 6 */

const express = require('express');
const router = express.Router();
const tweetBank = require('../tweetBank');
const dirName = '/Users/samwheeler/fullstack/week_2/twitter-js/public';

router.get('/', (req, res) => {
  let tweetlist = tweetBank.list();
  res.render('index', {tweets: tweetlist} );
});

//if we havea file in public just use the static file
router.use(express.static('public'));

// router.get('/stylesheets/style.css', (req, res) => {
//   res.sendFile(dirName + req.path);
// });

module.exports = router;
