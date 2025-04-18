// cart.js
document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    let totalPrice = 0;

    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
            <img src="${item.imageSrc}" alt="${item.title}" class="cart-item-image">
            <h2 class="cart-item-title">${item.title}</h2>
            <p class="cart-item-price">${item.price}</p>
            <button class="remove-button">x</button>
        `;
        cartItemsContainer.appendChild(itemElement);

        const price = parseFloat(item.price.replace('₹', '').replace(',', ''));
        totalPrice += price;
    });

    totalPriceElement.innerText = `₹${totalPrice.toLocaleString()}`;

    // Add event listeners to the "Buy" buttons
    document.querySelectorAll('.buy-button').forEach((button, index) => {
        button.addEventListener('click', () => {
            const item = cart[index];
            alert(`Proceeding to buy: ${item.title}`);
            // Implement further buy logic here
        });
    });

    // Add event listeners to the "Remove" buttons
    document.querySelectorAll('.remove-button').forEach((button, index) => {
        button.addEventListener('click', () => {
            cart.splice(index, 1); // Remove item from cart array
            localStorage.setItem('cart', JSON.stringify(cart)); // Update local storage
            location.reload(); // Reload the page to update the cart display
        });
    });
});
