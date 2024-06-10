// script.js
const header = document.querySelector("header");
const menu = document.querySelector('#menu-icon');
const navmenu = document.querySelector('.navmenu');
const cartIcon = document.querySelector('.cart-icon');
const cartItemsContainer = document.querySelector('.cart-items-container');

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", this.window.scrollY > 0);
});

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');
}

// Function to add item to cart
function addToCart(item) {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');

    cartItem.innerHTML = `
        <img src="${item.image}" alt="${item.title}">
        <div class="cart-item-details">
            <div class="cart-item-title">${item.title}</div>
            <div class="cart-item-price">${item.price}</div>
        </div>
        <div class="cart-item-remove">Remove</div>
    `;

    cartItem.querySelector('.cart-item-remove').onclick = () => {
        cartItem.remove();
    };

    cartItemsContainer.appendChild(cartItem);
    cartItemsContainer.classList.add('open');
}

// Event listener for "Add Cart" buttons
document.querySelectorAll('.row .price button').forEach((button, index) => {
    button.onclick = () => {
        const product = button.closest('.row');
        const item = {
            image: product.querySelector('img').src,
            title: product.querySelector('.price h4').textContent,
            price: product.querySelector('.price p').textContent,
        };
        addToCart(item);
    };
});

// Toggle cart items container visibility
cartIcon.onclick = (e) => {
    e.preventDefault();
    cartItemsContainer.classList.toggle('open');
};
