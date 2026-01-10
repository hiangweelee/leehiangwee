const disneyData = {
	open: "120.54",
	high: "122.56",
	low: "120.54",
	close: "121.09"
};

// Write your code below

const open = parseFloat(disneyData.open);
const high = parseFloat(disneyData.high);
const low = parseFloat(disneyData.low);
const close = parseFloat(disneyData.close);
const result = open - high + low - close;

console.log(result.toFixed(2));


