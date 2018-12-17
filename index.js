'use strict';

const festivals = [
	{
		name: 'New Year',
		emoji: '🎉'
	},
	{
		name: 'Christmas',
		emoji: '🎄'
	},
	{
		name: 'Halloween',
		emoji: '🎃'
	}
];

const festival = {
	is: name => {
		for (const item of festivals) {
			if (item.name === name) {
				return true;
			}
		}
		return false;
	},
	isHoliday: () => {
	},
	getHoliday: () => {
	},
	getEmoji: () => {
	}
};

module.exports = festival;
