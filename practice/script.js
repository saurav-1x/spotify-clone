document.addEventListener('DOMContentLoaded', () => {
    const toggleSwitch = document.getElementById('toggleSwitch');
    const statusText = document.getElementById('statusText');

    toggleSwitch.addEventListener('change', () => {
        if (toggleSwitch.checked) {
            statusText.textContent = 'ON';
        } else {
            statusText.textContent = 'OFF';
        }
    });
});
