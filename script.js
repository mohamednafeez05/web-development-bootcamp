const cartLink = document.querySelector(".cart-link");

const addToCartButtons = document.querySelectorAll(".product-card button");

const savedCart = localStorage.getItem("cart");

const searchInput = document.querySelector("#searchInput");

const productCards = document.querySelectorAll("#products .product-card");

const categoryCards = document.querySelectorAll(".category-card");

let cart;

if (savedCart) {
    cart = JSON.parse(savedCart);
} else {
    cart = [];
}


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

updateCartSummary();

function saveCart() {

    localStorage.setItem("cart", JSON.stringify(cart));

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

        saveCart();
        
        updateCartSummary();

        clickedButton.textContent = "Added ✓";

        setTimeout(function() {

            clickedButton.textContent = "Add to Cart";

        }, 1000);

    });

});

searchInput.addEventListener("input", function(event) {

    const searchText = event.target.value
        .toLowerCase()
        .trim();

    productCards.forEach(function(card) {

        const productName = card
            .querySelector("h3")
            .textContent
            .toLowerCase()
            .trim();

        if (productName.includes(searchText)) {

            card.style.display = "flex";

        } else {

            card.style.display = "none";

        }

    });

});

categoryCards.forEach(function(categoryCard) {

    categoryCard.addEventListener("click", function() {

        const selectedCategory = categoryCard.dataset.filter;

        productCards.forEach(function(productCard) {

            if (productCard.dataset.category === selectedCategory) {

                productCard.style.display = "flex";

            } else {

                productCard.style.display = "none";

            }

        });

    });

});