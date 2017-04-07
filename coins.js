


var money = 1.21;
money *= 100;
//var test = 4.21;
function coinCounter () {
  // Initialize a JavaScript object to hold the coins
  var coinPurse = {};
  if (money > 25) {
  	coinPurse.quarters = Math.floor(money/25);
  	money -= coinPurse.quarters * 25;
  	console.log(money);
  }
  if (money > 10) {
  	coinPurse.dimes = Math.floor(money/10);
  	money -= coinPurse.dimes * 10;
  	console.log(money);
  }
  if (money > 5) {
  	coinPurse.nickle = Math.floor(money/5);
  	money -= coinPurse.nickle * 5;
  	console.log(money);
  }
  if (money >= 1) {
  	coinPurse.penny = money;
  	console.log(money);
  }
  

  return coinPurse;
}

var coins = coinCounter()
console.log(coins);

