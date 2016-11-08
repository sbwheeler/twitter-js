/*jshint esversion: 6 */

var express = require( 'express' );
var app = express(); // creates an instance of an express application
var nunjucks = require('nunjucks');
const routes = require('./routes/')
app.use('/', routes);

nunjucks.configure('views', {noCache: true});
app.set('view engine', 'html');
app.engine('html', nunjucks.render);

app.use((req, res, next) => {
	console.log(req.method);
	console.log(res.statusCode);
	next();
});

app.use('/special', (req, res, next) => {
	console.log("you reached the special area.");
});

// app.get('/', (req, res, next) => {
// 	res.send('hello world');
// });

// app.get('/nunjucks', (req, res, next) => {
//   var ppl = [{name: 'Gandalf'}, {name: 'Hermione'}, {name: 'Frodo'}];
//   res.render('index.html', {title: 'An Example', people: ppl});
// });

// app.get('/news', (req, res) => res.send('mass hysteria'));

app.listen(3000);



