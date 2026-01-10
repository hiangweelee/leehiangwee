const msftData = [190.15, 194.21, 191.07, 190.44, 200.15];

// Write your code below
const sum = msftData.reduce((acc, price) => acc + price, 0);
const average = sum/msftData.length;
console.log(average);





