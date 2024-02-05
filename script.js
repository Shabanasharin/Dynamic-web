let cart = [];

function addToCart(productName, price) {
    const item = { name: productName, price: price };
    cart.push(item);
    updateCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function updateCart() {
    const cartItemsElement = document.getElementById('cart-items');
    const totalCostElement = document.getElementById('totalCost');

    cartItemsElement.innerHTML = '';
    let totalCost = 0;

    cart.forEach((item, index) => {
        const cartItemElement = document.createElement('div');
        cartItemElement.classList.add('cart-item');

        cartItemElement.innerHTML = `
            <p id="itemnames">${item.name} - <i class="fa-solid fa-indian-rupee-sign"></i>${item.price}</p>
            <button class="bttn" onclick="removeFromCart(${index})">Remove item</button>
        `;

        cartItemsElement.appendChild(cartItemElement);
        totalCost += item.price;
    });

    totalCostElement.textContent = totalCost;
}

function clearCart() {
    cart = [];
    updateCart();
}

document.addEventListener('DOMContentLoaded', function () {
var parallaxBackground = document.querySelector('.parallax-background');

document.addEventListener('scroll', function () {
  var scrolled = window.scrollY;
  parallaxBackground.style.transform = 'translate3d(0, ' + scrolled * 0.5 + 'px, 0)';
});
});
function BuyNow(){
    alert('Your Order Placed')
}