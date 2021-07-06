const express = require('express');
var bodyParser =  require('body-parser');

var userRoutes = require('./routers/user.route');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'pug');
app.set('views', './view');

app.use(express.static('public'));
app.get('/', (req, res) => res.render('index', {
  name: 'Tien Anh',
}));

app.use('/users', userRoutes);
app.listen(port, () => console.log(`example app listening on port ${port}`));