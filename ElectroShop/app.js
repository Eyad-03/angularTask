"use strict";
let storeName = "";
let storeDescription = "";
let currency = "";
let countProduct = 0;
let isOpen = true;
let productName = ["laptop", "phone", "nokia", "samsung", "iphone"];
let productDifferent = ["laptop", true, 20];
let message = "";
if (isOpen) {
    message = "store is open";
}
else {
    message = "store is close";
}
let productPrice = 650;
if (productPrice > 500) {
    console.log("Expensive Product");
}
else if (productPrice >= 100 && productPrice <= 500) {
    console.log("Medium Price");
}
else {
    console.log("Affordable Product");
}
for (let i = 0; i < productName.length; i++) {
    console.log(productName[i]);
}
let prices = [650, 75, 200, 45, 300];
let count = 0;
for (let i = 0; i < prices.length; i++) {
    if (prices[i] > 100) {
        count++;
    }
}
console.log("Products greater than 100: " + count);
function calculateDiscount(price, discount) {
    let finalPrice = price - (price * discount / 100);
    return finalPrice;
}
console.log(calculateDiscount(100, 20));
function checkProductAvailability(quantity) {
    if (quantity > 0) {
        return "In Stock";
    }
    else {
        return "Out of Stock";
    }
}
console.log(checkProductAvailability(5));
function displayStoreMessage(message) {
    console.log(message);
}
displayStoreMessage("Welcome to ElectroShop");
function calculateTotalPrice(...prices) {
    let total = 0;
    for (let i = 0; i < prices.length; i++) {
        total += prices[i];
    }
    return total;
}
console.log(calculateTotalPrice(100, 200, 50, 150));
