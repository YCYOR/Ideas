var prompt = require('prompt');
var test = require('tape');
test('timing test',function (t) {
	t.plan(2);
	t.equal(typeof Date.now, 'function');
	var start = Date.now();

	//prompt.start();
	//prompt.get(['username', 'email'], function (err, result) {
	//// 
	//// Log the results. 
	//// 
		//console.log('Command-line input received:');
		//console.log('  username: ' + result.username);
		//console.log('  email: ' + result.email);
	//});
	setTimeout(function() {
		t.isEqual(Date.now() - start, 100, "it's now or then");
	}, 100);
})
