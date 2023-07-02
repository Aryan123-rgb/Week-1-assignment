/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/


function calculateTotalSpentByCategory(transactions) {
  let ans = {};
  transactions.forEach((transaction)=>{
    if(!ans[transaction.category]){
      ans[transaction.category] = 0;
    }
    ans[transaction.category] += transaction.price;
  });
  return ans;
}

let ans = calculateTotalSpentByCategory([
  { itemName: "pen", category: "study", price: 10 },
  { itemName: "pencil", category: "study", price: 5 },
  { itemName: "papaya", category: "food", price: 10 },
  { itemName: "apple", category: "food", price: 10 },
  { itemName: "orange", category: "food", price: 10 },
  { itemName: "grapes", category: "food", price: 10 },
  { itemName: "location", category: "delhi", price: 1000 },
  
]);

console.log(ans);

module.exports = calculateTotalSpentByCategory;
