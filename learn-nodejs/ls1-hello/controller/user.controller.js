const users = require('../db');

module.exports = {
  list: (req, res) => res.render('users/index', {
    users: users,
  }),
  search: (req, res) => {
    var q = req.query.q;
    var matchedUser = users.filter(user => {
      return  user.name.toLowerCase().indexOf(q) !== -1
    })
  
    res.render('users/index', {
      users: matchedUser,
      searchResult: q,
    })
  },
  create: (req, res) => {
    res.render('users/create');
  },
  postCreate: (req, res) => {
    let errors = [];
    console.log(req.body);
    if(!req.body.name) {
      errors.push('Name is required');
    }
    if(!req.body.phone) {
      errors.push('Phone is required');
    }
    if(errors.length) {
      res.render('users/create', {
        errors: errors,
        values: req.body,
      });
      return;
    }
    users.push(req.body);
    res.redirect('/users');
  },
}