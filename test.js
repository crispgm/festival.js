import test from 'ava';

import festival from '.';

// Test festival set is always today, so it will be true
const testFestivalsMustTrue = [
	{
		name: 'Today',
		emoji: '🎉',
		month: (new Date()).getMonth() + 1,
		day: (new Date()).getDate()
	}
];

const testFestivalsMustFalse = [
	{
		name: 'Today',
		emoji: '🎉',
		month: (new Date()).getMonth() + 1,
		day: (new Date()).getDate() - 1
	}
];

test('is holiday', t => {
	t.true(festival.isHoliday(testFestivalsMustTrue));
	t.false(festival.isHoliday(testFestivalsMustFalse));
});

test('get holiday', t => {
	t.deepEqual('Today', festival.getHoliday(testFestivalsMustTrue));
	t.deepEqual('', festival.getHoliday(testFestivalsMustFalse));
});

test('get emoji', t => {
	t.deepEqual('🎉', festival.getEmoji(testFestivalsMustTrue));
	t.deepEqual('', festival.getEmoji(testFestivalsMustFalse));
});

test('is christmas', t => {
	t.true(festival.is('Christmas'));
});
