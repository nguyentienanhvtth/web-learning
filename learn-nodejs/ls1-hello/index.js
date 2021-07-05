const express = require('express');
const app = express();
const port = 3000;

var users = [
  {id: 1, name: 'Tien Anh'},
  {id: 2, name: 'Hung'},
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
  console.log(req.query);
})
app.listen(port, () => console.log(`example app listening on port ${port}`));