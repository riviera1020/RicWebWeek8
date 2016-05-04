const Router = require('express').Router;
const router = new Router();


var John = {
	name: 'John',
	age: 23
};
var Amy = {
	name: 'Amy',
	age: 18
};
var users = {
	users: [John, Amy]
};

var Nobody = {
	name: "o'_'o",
	age: '0.0'
};

router.get('/users', function(req, res) {
	console.log(users);
	res.json(users);
});

router.get('/users/:username', function(req, res) {
	console.log(req.params.username);
	if (req.params.username === 'John') {
		res.json(John);
	} else if (req.params.username === 'Amy') {
		res.json(Amy);
	} else {
		res.json(Nobody);
	}
});


module.exports = router;