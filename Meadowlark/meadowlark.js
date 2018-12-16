// requiring the express package
var express = require('express');
// setting the express package-functionality into a variable
var app = express();
// set up handlebars view enging
var handlebars = require('express-handlebars').create({ defaultLayout: 'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

// set the port to a || b
app.set('port', process.env.PORT || 3000);

// .get is the method by which we're adding routes
// home page route; if no particular page is requested, invoke functin to: in plain text - send Meadowlark Travel(home page)
app.get('/', function(req, res){
    res.render('home');
});
// about page route; if /about is requested, invoke functin to: in plain text - render About Meadowlark Travel(about page)
app.get('/about', function(req, res){
    var randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    res.render('about', {fortune: randomFortune});
});

// if none of the route handlers written above are satisfied, route through error handlesrs below
// custom 404 page; ************************** explain here and below 
app.use(function(req, res, next){
    res.status(404);
    res.render('404');
});

// cutsom 500 page
app.use(function(err, req, res, next){
    console.error(err.stack);
    res.status(500);
    res.render('500');
});

// if port aquired, console.log
app.listen(app.get('port'), function(){
    console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});

app.use(express.static(__dirname + '/public'));

var fortunes = ['Conquer your fears or they will conquer you.', 'Rivers need springs', 'Do not fear what you don\'t know.', 'You will have a pleasant surprise.', 'Whenever possible, keep it simple'];
