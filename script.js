console.log("INSMART Javascript is working");
let productName = "Laptop";
let price = 350000;
let inStock = true;

console.log(productName);
console.log(price);
console.log(inStock);

let quantity = 2;
let total = price * quantity;

console.log(total);

if (inStock === true) {
    console.log("Product is available");
} else {
    console.log("Product is out of stock");
}

function calculateTotal(productPrice, productQuantity) {
    return productPrice * productQuantity;
}

let cartTotal = calculateTotal(4500, 3);

console.log(cartTotal);

let categories = [
    "Laptops",
    "Accessories",
    "Networking",
    "CCTV & Security"
];

console.log(categories);
console.log(categories[0]);

let product = {
    name: "CCTV Camera",
    price: 18500,
    inStock: true,
    category: "CCTV & Security"
};

console.log(product);
console.log(product.name);
console.log(product.price);

let cartLink = document.querySelector(".cart-link");

console.log(cartLink);

cartLink.textContent = "Cart (0)";

let addToCartButtons = document.querySelectorAll(".product-card button");
let cartCount = 0;

addToCartButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        cartCount++;

        cartLink.textContent = "Cart (" + cartCount + ")";

    });

});