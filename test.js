import test from 'ava';

import festival from '.';

test('is christmas', t => {
	t.true(festival.is('Christmas'));
});
