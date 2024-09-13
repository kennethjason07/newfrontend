// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const customerForm = document.getElementById('customer-form');
    const customerList = document.getElementById('customer-ul');
    const billSection = document.getElementById('bill-section');
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const sidebar = document.getElementById('sidebar');

    let activeOrders = 0;
    let completedOrders = 0;

    customerForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const contact = document.getElementById('contact').value;
        const measurements = document.getElementById('measurements').value;

        const li = document.createElement('li');
        li.textContent = `Name: ${name}, Contact: ${contact}, Measurements: ${measurements}`;
        customerList.appendChild(li);

        customerForm.reset();
    });

    document.getElementById('generate-bill').addEventListener('click', () => {
        billSection.innerHTML = '<p>Bill generated successfully!</p>';
    });

    hamburgerMenu.addEventListener('click', () => {
        sidebar.classList.toggle('visible');
    });
});
