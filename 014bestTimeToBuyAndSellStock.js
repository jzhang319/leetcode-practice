let prices = [7, 1, 5, 3, 6, 4];
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

var maxProfit = function (prices) {
  // initialize variables maxProfit, buyPrice
  let buyPrice = prices[0];
  let profit = 0;

  for (let i = 0; i < prices.length; i++) {
    // if there is no profit, continue
    // if there is profit
    // if profit ? > maxProfit
    let tempProfit = prices[i + 1] - prices[i];
    if (tempProfit > 0) {
      if (prices[i] < buyPrice) {
        buyPrice = prices[i];
      }
      if (prices[i + 1] - buyPrice > profit) {
        profit = prices[i + 1] - buyPrice;
      }
    }
  }

  return profit;
};

console.log(maxProfit(prices));
