const express = require('express');
var bodyParser =  require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var users = [
  {id: 1, name: 'Tien Anh'},
  {id: 2, name: 'Hung'},
  {id: 3, name: 'Nguyen Ung'},
];

app.set('view engine', 'pug');
app.set('views', './view');

app.get('/', (req, res) => res.render('index', {
  name: 'Tien Anh',
}));
app.get('/users', (req, res) => res.render('users/index', {
  users: users,
}));

app.get('/users/search', (req, res) => {
  var q = req.query.q;
  var matchedUser = users.filter(user => {
    return  user.name.toLowerCase().indexOf(q) !== -1
  })

  res.render('users/index', {
    users: matchedUser,
    searchResult: q,
  })
})

app.get('/users/create', (req, res) => {
  res.render('users/create');
});

app.post('/users/create', (req, res) => {
  
  console.log(req.body);
  users.push(req.body);
  res.redirect('/users');
})

app.listen(port, () => console.log(`example app listening on port ${port}`));