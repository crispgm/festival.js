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
	length: () => {
		return festivals.length;
	}
};

module.exports = festival;
