// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "SALE20";

calculateTotalPrice = (products, promotionCode) => {
  let totalPrice = 0;
  let result = 0;

  for (let key in products) {
    totalPrice += products[key].price * products[key].quantity;
  }

  if (promotionCode === "SALE20") {
    result = totalPrice * 0.8;
  } else if (promotionCode === "SALE50") {
    result = totalPrice * 0.5;
  } else {
    result = totalPrice;
  }

  return result;
};
//console.log(calculateTotalPrice(products, " "));
console.log(calculateTotalPrice(products, promotionCode));
//console.log(calculateTotalPrice(products, "SALE50"));
