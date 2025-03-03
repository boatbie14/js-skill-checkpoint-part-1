// Question #4
/* const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
]; */


const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
	{ name: "Banana", price: 10, quantity: 2000 },
	{ name: "Orange", price: 30, quantity: 60 },
];

let minQtyName = "";
let minQty = 0;

for (let index = 0; index < inventory.length; index++) {
  if (index === 0) {
    minQty = inventory[index].quantity;
    minQtyName = inventory[index].name;
  } else {
    if (minQty > inventory[index].quantity) {
      minQty = inventory[index].quantity;
      minQtyName = inventory[index].name;
    }
  }
}

console.log(
  "สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ " +
    minQtyName +
    " ซึ่งมี " +
    minQty +
    " ชิ้น"
);
