import test from 'ava';

test('sync', t => {
	const fest = require('.');
	t.true(fest.length() > 1);
});
