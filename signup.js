document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signup-form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = emailInput.value;
        const password = passwordInput.value;
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        alert('Signup successful!.. redirecting you to home page');
        window.location.href = 'index.html';
    });
});
