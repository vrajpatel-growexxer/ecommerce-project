class Cart {
constructor() {
this.items = [];
}
getTotal() {
if (this.items.length === 0) {
return 0; // Fix: handle empty cart
}
return this.items.reduce((sum, item) => sum + item.price, 0);
}
}