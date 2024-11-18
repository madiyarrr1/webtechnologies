const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const showRegister = document.getElementById('showRegister');
const showLogin = document.getElementById('showLogin');
const formTitle = document.getElementById('formTitle');
const accountSection = document.getElementById('accountSection');
const usernameDisplay = document.getElementById('usernameDisplay');
const userEmail = document.getElementById('userEmail');
const logoutButton = document.getElementById('logoutButton');

showRegister.addEventListener('click', function() {
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
    formTitle.textContent = 'Register';
});

showLogin.addEventListener('click', function() {
    registerForm.style.display = 'none';
    loginForm.style.display = 'block';
    formTitle.textContent = 'Login';
});

registerForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    const user = { username, email, password };
    localStorage.setItem('user', JSON.stringify(user));

    alert('Registration successful!');
    loginForm.style.display = 'block';
    registerForm.style.display = 'none';
    formTitle.textContent = 'Login';
});

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const loginUsername = document.getElementById('loginUsername').value;
    const loginPassword = document.getElementById('loginPassword').value;

    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.username === loginUsername && user.password === loginPassword) {
        alert('Login successful!');
        usernameDisplay.textContent = user.username;
        userEmail.textContent = user.email;
        accountSection.style.display = 'block';
        loginForm.style.display = 'none';
        registerForm.style.display = 'none';

        localStorage.setItem('isLoggedIn', 'true');
    } else {
        alert('Invalid username or password!');
    }
});

logoutButton.addEventListener('click', function() {
    localStorage.setItem('isLoggedIn', 'false');
    accountSection.style.display = 'none';
    loginForm.style.display = 'block';
    formTitle.textContent = 'Login';
    location.reload();
});

function checkLoginState() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const user = JSON.parse(localStorage.getItem('user'));

    if (isLoggedIn && user) {
        usernameDisplay.textContent = user.username;
        userEmail.textContent = user.email;
        accountSection.style.display = 'block';
        loginForm.style.display = 'none';
        registerForm.style.display = 'none';
        formTitle.style.display = 'none';
    } else {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
        formTitle.textContent = 'Login';
    }
}

window.addEventListener('load', checkLoginState);
