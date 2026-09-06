const savedCart = localStorage.getItem("cart");

let cart;

if (savedCart) {
    cart = JSON.parse(savedCart);
} else {
    cart = [];
}

const cartTotalElement = document.querySelector("#cartTotal");
const cartItemsElement = document.querySelector("#cartItems");
const clearCartButton = document.querySelector("#clearCartBtn");

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function renderCart() {

    cartItemsElement.innerHTML = "";

    if (cart.length === 0) {

        cartItemsElement.innerHTML = `
            <p class="empty-cart-message">
                Your cart is empty.
            </p>
        `;

        cartTotalElement.textContent = "0";

        return;
    }

    let cartTotal = 0;

    cart.forEach(function(item) {

        const cartItem = document.createElement("div");

        cartItem.classList.add("cart-item");

        cartItem.innerHTML = `
            <h3>${item.name}</h3>

            <p>Price: Rs. ${item.price.toLocaleString()}</p>

            <div class="quantity-controls">
                <button class="decrease-btn">-</button>

                <span>${item.quantity}</span>

                <button class="increase-btn">+</button>
            </div>

            <p>Subtotal: Rs. ${(item.price * item.quantity).toLocaleString()}</p>
            
            <button class="remove-btn">Remove</button>
        `;

        cartItemsElement.appendChild(cartItem);

        const increaseButton = cartItem.querySelector(".increase-btn");
        const decreaseButton = cartItem.querySelector(".decrease-btn");
        const removeButton = cartItem.querySelector(".remove-btn");

        increaseButton.addEventListener("click", function() {

            item.quantity++;

            saveCart();

            renderCart();

        });


        decreaseButton.addEventListener("click", function() {

            if (item.quantity > 1) {

                item.quantity--;

                saveCart();

                renderCart();

            }

        });

        
        removeButton.addEventListener("click", function() {

            cart = cart.filter(function(product) {
                return product.name !== item.name;
            });

            saveCart();

            renderCart();

        });

        cartTotal = cartTotal + (item.price * item.quantity);

    });

    cartTotalElement.textContent = cartTotal.toLocaleString();

}

renderCart();

clearCartButton.addEventListener("click", function() {

    cart = [];

    saveCart();

    renderCart();

});