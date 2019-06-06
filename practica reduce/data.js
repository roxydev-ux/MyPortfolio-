const total = JSON.parse(Lunch);

var totalPrices = total.reduce((sum, value) => (typeof value.price == "number" ? sum + value.price : sum), 0);
console.log(totalPrices);