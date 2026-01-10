const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// Write your code below
function analyzePrices(prices) {
    let sum = 0;
    for (let i = 0; i < prices.length; i++) {
        sum += prices[i];
    }
    const sma = sum/prices.length;
    let countAbove = 0;
    for (let i= 0; i<prices.length; i++) {
        if (prices[i] >sma) {
            countAbove++;
        }
    }

    return countAbove;
}
const countAbove = analyzePrices(amdPrices);
console.log(`Number of days AMD was above the 7-day SMA is: ${countAbove}`);
