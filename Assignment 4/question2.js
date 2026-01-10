const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// Write your code below
function calculateSMA(prices) {
    let sum = 0;

    for (let i = 0; i < prices.length; i++) {
        sum += prices[i];
    }
    return sum/prices.length;
}
const sma = calculateSMA(amdPrices);
console.log(`The 7-day SMA of AMD is ${sma.toFixed(2)}`);
