const {shopForBeans, soakTheBeans, cookTheBeans} = require('./library.js');

// Write your code below:
async function makeBeans() {
let type = await shopForBeans();
console.log(type);
let isSoft = await soakTheBeans(type);
console.log(isSoft);
let dinner = await cookTheBeans(isSoft);
console.log(dinner);
};
makeBeans();