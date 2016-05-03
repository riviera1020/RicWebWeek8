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
	users: John
};

router.get('/users', function(req, res) {
	res.json({
		id: 1,
		name: "Joe",
		age: 18
	});
});


module.exports = router;