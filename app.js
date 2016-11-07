var express = require( 'express' );
var app = express(); // creates an instance of an express application

app.use('/', (req, res, next) => {
	console.log(req.method);
	console.log(res.statusCode);
	next();
});

app.use('/special', (req, res, next) => {
	console.log("you reached the special area.")
});

app.get('/', (req, res, next) => {
	res.send('hello world');
	//next();
});

app.get('/news', (req, res) => res.send('mass hysteria'));

app.listen(3000);