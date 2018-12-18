'use strict';

const defaultFestivals = [
	{
		name: 'New Year',
		emoji: '🎉',
		month: 1,
		day: 1
	},
	{
		name: 'Valentine\'s Day',
		emoji: '❤️',
		month: 2,
		day: 14
	},
	{
		name: 'Halloween',
		emoji: '🎃',
		month: 10,
		day: 31
	},
	{
		name: 'Christmas',
		emoji: '🎄',
		month: 12,
		day: 25
	}
];

function getDate() {
	const d = new Date();
	return {
		month: d.getMonth() + 1,
		day: d.getDate(),
		dayOfWeek: d.getDay()
	};
}

function checkHoliday(hs, date, cb) {
	for (const item of hs) {
		if (date.month === item.month && date.day === item.day) {
			return cb(item);
		}
	}
	return null;
}

const festival = {
	is: name => {
		for (const item of defaultFestivals) {
			if (item.name === name) {
				return true;
			}
		}
		return false;
	},
	isHoliday: hs => {
		const holidaySet = hs || defaultFestivals;
		const date = getDate();
		return checkHoliday(holidaySet, date, () => true) || false;
	},
	getHoliday: hs => {
		const holidaySet = hs || defaultFestivals;
		const date = getDate();
		return checkHoliday(holidaySet, date, item => item.name) || '';
	},
	getEmoji: hs => {
		const holidaySet = hs || defaultFestivals;
		const date = getDate();
		return checkHoliday(holidaySet, date, item => item.emoji) || '';
	}
};

module.exports = festival;
