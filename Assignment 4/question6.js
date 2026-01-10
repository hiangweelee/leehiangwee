// Modify the code below:
const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82]

function threeLowest(arr) {
    let min1 = Infinity, min2 = Infinity, min3 = Infinity;
    for (let i = 0; i <arr.length; i++) {
        const x = arr[i];
        if (x < min1) {
            min3 = min2; 
            min2 = min1;
            min1 = x;
        } else if (x < min2) {
            min3 = min2;
            min2 = x;
        } else if (x < min3) {
            min3 = x;        }
    }
return[min1, min2, min3];
}
const[p1, p2, p3] = threeLowest(amdPrices);
console.log(`The three lowest prices are ${p1}, ${p2}, and ${p3}`);