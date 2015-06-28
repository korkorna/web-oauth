
module.exports = function (app) {
	var fs = require('fs');

	app.get('/', function(req, res) {
		// 세션정보를 확인한다.
		console.log(req.session);

		// req.user 는 아래에서 설명한다.
		// 처음에 undefined 이나, 로그인 성공하면, profile 정보가 저장된다.
		console.log(req.user); 
		res.render('../public/index', { user: req.user.session.passport.user || {} });
	});


	// 404 page
	app.get('*', function(req, res) {
		res.type('html').send(404, fs.readFileSync('../public/404.html'));
	});
};