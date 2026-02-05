class Product {
constructor(name, price) {
this.name = name;
this.price = price;
this.discount = 0;
}
getPrice() {
const tax = 0.18;
const discountedPrice = this.price - (this.price * this.discount / 100);
return discountedPrice + (discountedPrice * tax);
}
}
module.exports = Product;