/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let categories = [...new Set(transactions.map((transaction) => transaction.category))]
  console.log(categories)
  let totalSpentByCategory = []
  categories.forEach((category) => {
      let totalPrice =  transactions.reduce((accumulator, transaction) => {
          if (transaction.category === category) {
              return accumulator + transaction.price;
          }
          else {
              return accumulator;
          }
      }, 0)
      totalSpentByCategory.push({
          category: category,
          totalSpent: totalPrice
      })
  })
  
  return totalSpentByCategory;
}

module.exports = calculateTotalSpentByCategory;
