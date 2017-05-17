var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');

var survey = require('./app/routes/survey.server.routes.js');

var app = express();
app.locals.products = ['iphone 7', 'huawei p9', 'Pixel XL', 'Samsung S7'];
app.locals.surveyresults =
{
    fp:[0,0,0,0],
    mp:[0,0,0,0]
};

app.set('views', path.join(__dirname,'app/views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(session(
    {
        secret: 'ssshhhhh',
        cookie:
        {
            maxAge:600000
        }
    }
));

app.use('/', survey);
app.use('/survey', survey);
app.listen(3000, function ()
{
    console.log('survey app listening on port 3000!')
});