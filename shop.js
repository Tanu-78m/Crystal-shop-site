document.addEventListener('DOMContentLoaded', () => {
    const cartCountElement = document.getElementById('cartCount');
    let cartCount = 0;

    // Get all the "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const lessProductButtons = document.querySelectorAll('.less-product'); // Get all Less Product buttons

    // Function to update the cart count display
    const updateCartCountDisplay = () => {
        cartCountElement.textContent = cartCount;
    };

    // Add click event listener to each "Add to Cart" button
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            cartCount++;
            updateCartCountDisplay(); // Update the cart count display
        });
    });

    // Add click event listener to each "Less Product" button
    lessProductButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (cartCount > 0) {
                cartCount--;
                updateCartCountDisplay(); // Update the cart count display
            }
        });
    });
});

