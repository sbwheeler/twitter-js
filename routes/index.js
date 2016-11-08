'use strict';

/*jshint esversion: 6 */

const express = require('express');
const router = express.Router();
const tweetBank = require('../tweetBank');
const dirName = '/Users/samwheeler/fullstack/week_2/twitter-js/public';



router.get('/', (req, res) => {
  let tweetlist = tweetBank.list();
  res.render('index', {tweets: tweetlist, showForm: true} );
});

//if we havea file in public just use the static file
router.use(express.static('public'));

// router.get('/stylesheets/style.css', (req, res) => {
//   res.sendFile(dirName + req.path);
// });

// router.get( '/users/:name', function (req, res) {
//   console.log( req.params.name ); // --> 'nimit'
// });

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = tweetBank.find( {name: name} );
  //var tweetList = list.list();
  // console.log(name, list);
  res.render( 'index', {tweets: list } );
});

router.post('/tweets', (req, res) => {
  var name = req.body.name;
  var text = req.body.text;
  tweetBank.add(name, text);
  res.redirect('/');
});

module.exports = router;
