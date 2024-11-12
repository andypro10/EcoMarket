// Menú desplegable para móviles
const menuToggle = document.querySelector('.fa-bars');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Cambiar el contador del carrito
const cartNumber = document.querySelector('.content-shopping-cart .number');

// Simulamos agregar productos al carrito
let cartCount = 0;

function updateCart() {
    cartNumber.textContent = `(${cartCount})`;
}

document.querySelector('.fa-basket-shopping').addEventListener('click', () => {
    cartCount++;
    updateCart();
});

// Búsqueda
const searchInput = document.querySelector('.search-form input');
const searchButton = document.querySelector('.btn-search');

searchButton.addEventListener('click', (event) => {
    event.preventDefault();
    const searchTerm = searchInput.value.toLowerCase();
    console.log(`Buscando: ${searchTerm}`);
});

function toggleDetails(button) {
    var details = button.parentElement.querySelector('.details');
    if (details.style.display === "none") {
        details.style.display = "block";
        button.textContent = "Leer menos";
    } else {
        details.style.display = "none";
        button.textContent = "Leer más";
    }
}

document.querySelectorAll('.smooth-scroll').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
