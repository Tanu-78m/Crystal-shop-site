document.addEventListener("DOMContentLoaded", () => {
    const displayQuantity = document.getElementById("display-quantity");
    const quantityControl = document.getElementById("quantity");
    const totalPrice = document.getElementById("total-price");
    const checkoutBtn = document.getElementById("checkout-btn");

    let quantity = 1;

    // Update total price based on quantity
    const updateTotalPrice = () => {
        const pricePerUnit = 19.99; // Change this to match your product price
        totalPrice.textContent = (quantity * pricePerUnit).toFixed(2);
        quantityControl.textContent = quantity;
        displayQuantity.textContent = quantity;
    };

    // Increase quantity
    document.getElementById("increase-quantity").addEventListener("click", () => {
        quantity++;
        updateTotalPrice();
    });

    // Decrease quantity
    document.getElementById("decrease-quantity").addEventListener("click", () => {
        if (quantity > 1) {
            quantity--;
            updateTotalPrice();
        }
    });

    // Checkout button click event
    checkoutBtn.addEventListener("click", () => {
        window.location.href = "index.html"; // Redirect back to home page
    });

    // Initialize quantity and total price on load
    updateTotalPrice();
});
