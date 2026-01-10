const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// Write your code below
function getHighestPrice(prices) {
    let maxPrice = prices[0];

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > maxPrice) {
            maxPrice = prices[i];
        }
    }
    return maxPrice;
}
const highestPrice = getHighestPrice(amdPrices);
console.log(`AMD 52-week high is ${highestPrice}`);

