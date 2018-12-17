'use strict';

const defaultFestivals = [
	{
		name: 'New Year',
		emoji: '🎉',
		month: 1,
		day: 1
	},
	{
		name: 'Christmas',
		emoji: '🎄',
		month: 12,
		day: 25
	},
	{
		name: 'Halloween',
		emoji: '🎃'
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
		let holidaySet = defaultFestivals;
		if (hs) {
			holidaySet = hs;
		}
		const date = getDate();
		return checkHoliday(holidaySet, date, () => true) || false;
	},
	getHoliday: hs => {
		let holidaySet = defaultFestivals;
		if (hs) {
			holidaySet = hs;
		}
		const date = getDate();
		return checkHoliday(holidaySet, date, item => item.name) || '';
	},
	getEmoji: hs => {
		let holidaySet = defaultFestivals;
		if (hs) {
			holidaySet = hs;
		}
		const date = getDate();
		return checkHoliday(holidaySet, date, item => item.emoji) || '';
	}
};

module.exports = festival;
