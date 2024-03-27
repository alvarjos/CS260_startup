const loginButton = document.querySelector('.login-button');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

const createAccountButton = document.querySelector('.create-account-button');

loginButton.addEventListener('click', () => {
    const username = usernameInput.value;
    const password = passwordInput.value;

    const user = [
        {
            username: 'testUser',
            password: 'testPass'
        }
    ];

    loginButton(user);
});

createAccountButton.addEventListener('click', () => {
    const username = usernameInput.value;
    const password = passwordInput.value;

    const user = {
        username,
        password
    };
    createAccount(user);
});

function login(user) {
    const isValidUser = users.some(u => u.username == user.username && u.password == user.password); 

    if (isValidUser) {
        window.location.href = 'homePage.html';
    } else {
        alert('Invalid Login Information');
    }
}

function getUserFromInputs() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    return {
        username,
        password
    };
}

document.addEventListener('DOMContentLoaded', function() {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(function(item) {
        item.addEventListener('click', function() {
            if (!this.classList.contains('active')) {
                closeAllItems();
            }
            this.classList.toggle('active');
        });
    });

    function closeAllItems() {
        accordionItems.forEach(function(item) {
            item.classList.remove('active');
        });
    }
});

function myFunction() {
    var x = document.getElementById("myNavBar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}

function toggleMenu() {
    const body = document.body;
    body.classList.toggle('nav-active');
}

const navbarLinks = Array.from(document.getElementsByClassName('navbar-collapse')[0].getElementsByTagName('a'));

navbarLinks.forEach((item, index) => {
    item.onclick = () => {
        navbarLinks.forEach((link, idx) => {
            if (idx !== index) {
                link.classList.remove('active');
            }
        });
        item.classList.add('active');
    }
});