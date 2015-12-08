var keystone = require('keystone');
var User = keystone.list('User');

module.exports = function (done) {
	new User.model({
		name: {
			first: 'Demo',
			last: 'User'
		},
		email: 'phiphamuet@gmail.com',
		password: 'Hongphi94',
		isAdmin: true,
		isProtected: true,
	})
	.save(done);
};
