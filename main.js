// Sample Products Data
const products = [
    { id: 1, name: "T-Shirt", price: 19.99, image: "images/tshirt.jpg" },
    { id: 2, name: "Jeans", price: 49.99, image: "images/jeans.jpg" },
    { id: 3, name: "Sneakers", price: 59.99, image: "images/sneakers.jpg" },
];

let cart = [];

// Load featured products
function loadFeaturedProducts() {
    const productsGrid = document.querySelector('.products-grid');
    productsGrid.innerHTML = products.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
    `).join('');
}

// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCartCount();
    alert(`${product.name} added to cart!`);
}

// Update Cart Count
function updateCartCount() {
    document.getElementById('cart-count').textContent = cart.length;
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    