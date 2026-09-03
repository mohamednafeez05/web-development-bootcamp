const cartLink = document.querySelector(".cart-link");

const addToCartButtons = document.querySelectorAll(".product-card button");

let cart = [];

cartLink.textContent = "Cart (0)";

function updateCartSummary() {

    let totalItems = 0;
    let cartTotal = 0;

    cart.forEach(function(item) {

        totalItems = totalItems + item.quantity;

        cartTotal = cartTotal + (item.price * item.quantity);

    });

    cartLink.textContent = "Cart (" + totalItems + ")";

    console.log("Cart Total: Rs. " + cartTotal);
}

addToCartButtons.forEach(function(button) {

    button.addEventListener("click", function(event) {

        const clickedButton = event.currentTarget;

        const productCard = clickedButton.closest(".product-card");

        const productName = productCard
            .querySelector("h3")
            .textContent
            .trim();

        const productPrice = productCard
            .querySelector(".price")
            .textContent
            .trim();

        const numericPrice = Number(
            productPrice.replace("Rs.", "").replaceAll(",", "").trim()
        );

        console.log(productName, productPrice);

        const product = {
            name: productName,
            price: numericPrice,
            quantity: 1
        };

        const existingProduct = cart.find(function(item) {
            return item.name === productName;
        });

        if (existingProduct) {

            existingProduct.quantity++;

        } else {

            cart.push(product);

        }

        console.log(cart);
        
        updateCartSummary();

        clickedButton.textContent = "Added ✓";

        setTimeout(function() {

            clickedButton.textContent = "Add to Cart";

        }, 1000);

    });

});
