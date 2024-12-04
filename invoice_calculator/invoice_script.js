document.getElementById('calculate-btn').addEventListener('click', function () {
    const rows = document.querySelectorAll('#items-table tr');
    let subtotal = 0;

    rows.forEach(row => {
        const amount = parseFloat(row.cells[1].children[0].value) || 0;
        subtotal += amount;
    });

    const tax = subtotal * 0.10;
    const otherCosts = parseFloat(document.getElementById('other-costs').value) || 0;
    const totalCost = subtotal + tax + otherCosts;

    document.getElementById('subtotal').innerText = subtotal.toFixed(2);
    document.getElementById('tax').innerText = tax.toFixed(2);
    document.getElementById('total-cost').innerText = totalCost.toFixed(2);
});
// Toggle dropdown menu functionality
document.querySelectorAll('.dropdown').forEach(dropdown => {
    dropdown.addEventListener('click', function () {
        this.classList.toggle('open');
    });
});
// Close dropdown when clicking outside
document.addEventListener("click", (event) => {
    const dropdowns = document.querySelectorAll(".dropdown");
    dropdowns.forEach(dropdown => {
        if (!dropdown.contains(event.target)) {
            dropdown.classList.remove('open'); // Close dropdown
        }
    });
});
document.getElementById('calculate-btn').addEventListener('click', function () {
    const rows = document.querySelectorAll('#items-table tr');
    let subtotal = 0;

    rows.forEach(row => {
        const amountInput = row.querySelector('.item-amount');
        const priceDisplay = row.querySelector('.item-price');

        // Set the unit price for each item
        const unitPrices = [50, 20, 15, 30]; // Prices for Quran Classes, Islamic Books, Prayer Mats, Charity Donation
        const rowIndex = Array.from(rows).indexOf(row); // Get the index of the current row
        const unitPrice = unitPrices[rowIndex];

        const amount = parseFloat(amountInput.value) || 0;

        // Calculate price and update the price column
        const price = amount * unitPrice;
        priceDisplay.textContent = price.toFixed(2);

        // Add to subtotal
        subtotal += price;
    });

    const tax = subtotal * 0.10; // Fixed 10% tax rate
    const otherCosts = parseFloat(document.getElementById('other-costs').value) || 0;
    const totalCost = subtotal + tax + otherCosts;

    // Update displayed values
    document.getElementById('subtotal').innerText = subtotal.toFixed(2);
    document.getElementById('tax').innerText = tax.toFixed(2);
    document.getElementById('total-cost').innerText = totalCost.toFixed(2);
});
