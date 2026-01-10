const msftData = [
	[190.15, 196.21, 191.07, 194.44],
	[193.61, 195.89, 190.12, 193.40]
];

// Write your code below
function calculateAverageClosingPrice(data) {
	let sum = 0;
	for (let i = 0; i < data.length; i++) {
		sum += data[i][3];
	}
	return sum/data.length
}
const avgClose = calculateAverageClosingPrice(msftData);
console.log(`Average closing price of MSFT is ${avgClose.toFixed(2)}`);
