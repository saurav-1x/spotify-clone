document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signup-form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const savedEmail = localStorage.getItem('email');
    const savedPassword = localStorage.getItem('password');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = emailInput.value;
        const password = passwordInput.value;
        if (email === savedEmail && password === savedPassword) {
            alert('Login successful!');
            window.location.href = 'index.html';
        } else {
            alert('Invalid email or password.');
        }
    });
});


