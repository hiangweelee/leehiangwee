const disneyData = [
	{
		open: "120.54",
		high: "122.56",
		low: "120.54",
		close: "121.09"
	},
	{
		open: "123.15",
		high: "127.76",
		low: "123.02",
		close: "124.92"
	}
];

// Write your code below
function calculateAverageClose(data) {
	let sum = 0;
	for (let i = 0; i < data.length; i++) {
		sum += parseFloat(data[i].close);
	}
	return sum/data.length;
}
const avgClose = calculateAverageClose(disneyData);
console.log(`Average closing price of Disney is ${avgClose.toFixed(2)}`);

