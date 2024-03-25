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

// function toggleMenu(){
//     const navbarCollapse = document.getElementsByClassName('navbar-collapse')[0];
//     navbarCollapse.classList.toggle('active')
// }

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