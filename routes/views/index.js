var keystone = require('keystone');
var Post = keystone.list('Post');
var async = require('async');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	locals.section = 'home';
	//locals.filters = {
	//	post: req.params.post,
	//};

	//view.on('init', function (next) {
    //
	//	var q = Post.model.findOne({
	//		state: 'published',
	//		key: locals.filters.post,
	//	}).populate('author categories');
    //
	//	q.exec(function (err, result) {
	//		console.log(result);
	//		locals.post = result;
	//		next(err);
	//	});
    //
	//});

	// Load other posts
	view.on('init', function (next) {

		var q = Post.model.find().where('state', 'published').sort('-publishedDate').populate('author').limit('4');

		q.exec(function (err, results) {
			console.log(results);
			locals.posts = results;
			next(err);
		});

	});

	view.render('index');
}
