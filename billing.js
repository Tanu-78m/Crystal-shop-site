// Sample data for the basket items (this should be dynamic)
let basketItems = [
    { name: 'Crystal A', quantity: 1, price: 20 },
    { name: 'Crystal B', quantity: 2, price: 30 },
];

// Function to display items in the billing summary
function displayBillingItems() {
    const billingItemsContainer = document.getElementById('billing-items');
    const totalPriceContainer = document.getElementById('total-price');

    let total = 0;
    billingItemsContainer.innerHTML = '';

    basketItems.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.quantity}</td>
            <td>$${item.price}</td>
        `;
        billingItemsContainer.appendChild(row);
        total += item.price;
    });

    totalPriceContainer.innerText = total;
}

// Run the function on page load
window.onload = displayBillingItems;
