const cartLink = document.querySelector(".cart-link");

const addToCartButtons = document.querySelectorAll(".product-card button");

let cartCount = 0;

cartLink.textContent = "Cart (0)";

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

        console.log(productName, productPrice);

        cartCount++;

        cartLink.textContent = "Cart (" + cartCount + ")";

        clickedButton.textContent = "Added ✓";

        setTimeout(function() {

            clickedButton.textContent = "Add to Cart";

        }, 1000);

    });

});