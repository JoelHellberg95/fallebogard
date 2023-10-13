// Create an empty shopping cart
const cart = [];

// Function to add an item to the cart
function addToCart(productName, productPrice) {
    const item = {
        name: productName,
        price: productPrice
    };
    cart.push(item);
}

// Function to update and display the cart
function updateCart() {
    const cartList = document.getElementById('cart-items');
    cartList.innerHTML = '';

    let totalAmount = 0;

    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - ${item.price} kr`;
        cartList.appendChild(listItem);
        totalAmount += item.price;
    });

    const totalAmountElement = document.getElementById('checkout-total');
    totalAmountElement.textContent = `${totalAmount} kr`;
}

// Event listener for the "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.product button');
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.parentElement.querySelector('h2').textContent;
        const productPrice = parseFloat(button.parentElement.querySelector('.price').textContent);
        addToCart(productName, productPrice);
        updateCart();
    });
});

// Event listener for the "Checkout" button
const checkoutButton = document.getElementById('checkout-button');
checkoutButton.addEventListener('click', () => {
    updateCart();
    const checkoutModal = document.getElementById('checkout-modal');
    checkoutModal.style.display = 'block';
});

// Event listener for the "Confirm Checkout" button
const confirmCheckoutButton = document.getElementById('confirm-checkout-button');
confirmCheckoutButton.addEventListener('click', () => {
    // Add your logic to process the checkout here
    alert('Checkout confirmed!'); // Replace this with your actual checkout process
    cart.length = 0; // Clear the cart
    updateCart();
    const checkoutModal = document.getElementById('checkout-modal');
    checkoutModal.style.display = 'none';
});

// Event listener to close the checkout modal
const closeButton = document.getElementById('close-modal');
closeButton.addEventListener('click', () => {
    const checkoutModal = document.getElementById('checkout-modal');
    checkoutModal.style.display = 'none';
});
