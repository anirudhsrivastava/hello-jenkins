var request = require('superTest');
var app = require('../app.js');

describe('GET /', function() {
	it ('request with hello world', function(done) {
		request(app).get('/').expect('hello world', done);
	});
});