document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    if (email === '' || password === '') {
    errorMessage.textContent = 'Please enter both email and password';
    return;
    }
    if (email === 'test@flipkart.com' && password === 'password123') {
    alert('Login successful!');
    errorMessage.textContent = '';
    } else {
    errorMessage.textContent = 'Incorrect email or password. Please try again.';
    }
    });