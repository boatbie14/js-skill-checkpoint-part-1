// Question #2
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
];

inventory[0].quantity = 200;
inventory.push({ name: "Orange", price: 20, quantity: 300 });

let totalValue = 0;

for (let index = 0; index < inventory.length; index++) {
  totalValue += inventory[index].price * inventory[index].quantity;
}

console.log("มูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก " + totalValue + " บาท");
