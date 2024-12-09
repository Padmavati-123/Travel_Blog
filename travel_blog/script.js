// Subscription Form Logic
document.getElementById('subscribeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;

    if (email) {
        alert(`Subscription successful! Updates will be sent to ${email}`);
        e.target.reset();  // Clear the form input
    }
});
