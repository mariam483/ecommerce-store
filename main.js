const products = [
    { id: 1, name: "Wrist Watch", price: 250, img: "images/watch.jpg" },
    { id: 2, name: "Smartphone", price: 3500, img: "images/phone.jpg" },
    { id: 3, name: "Sports Shoes", price: 400, img: "images/shoes.jpg" },
    { id: 4, name: "Handbag", price: 150, img: "images/bag.jpg" },
    { id: 5, name: "Laptop", price: 8500, img: "images/laptop.jpg" },
    { id: 6, name: "Wireless Earbuds", price: 800, img: "images/earbuds.jpg" },
    { id: 7, name: "Sunglasses", price: 120, img: "images/sunglasses.jpg" },
    { id: 8, name: "Gaming Mouse", price: 250, img: "images/mouse.jpg" },
    { id: 9, name: "Bluetooth Speaker", price: 600, img: "images/speaker.jpg" },
    { id: 10, name: "Fitness Tracker", price: 450, img: "images/tracker.jpg" },
    { id: 11, name: "Camera", price: 5000, img: "images/camera.jpg" },
    { id: 12, name: "Backpack", price: 300, img: "images/backpack.jpg" }
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function updateCartCount() {
    const countElement = document.getElementById("cart-count");
    if (countElement) countElement.innerText = cart.length;
}

function addToCart(id) {
    const item = products.find(p => p.id === id);
    cart.push(item);
    saveCart();
    updateCartCount();
    alert("Added to cart!");
}

function renderProducts() {
    const list = document.getElementById("product-list");
    if (!list) return;
    list.innerHTML = "";
    products.forEach(p => {
        list.innerHTML += `
            <div class="product">
                <img src="${p.img}" alt="${p.name}">
                <h3>${p.name}</h3>
                <p>Price: ${p.price} EGP</p>
                <button onclick="addToCart(${p.id})">Add to Cart</button>
            </div>
        `;
    });
}

function renderCart() {
    const cartContainer = document.getElementById("cart-items");
    if (!cartContainer) return;
    cartContainer.innerHTML = "";
    let total = 0;
    cart.forEach((item, index) => {
        total += item.price;
        cartContainer.innerHTML += `
            <div class="cart-item">
                <span>${item.name} - ${item.price} EGP</span>
                <button onclick="removeFromCart(${index})">❌</button>
            </div>
        `;
    });
    document.getElementById("total-price").innerText = total + " EGP";
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    renderCart();
    updateCartCount();
}

renderProducts();
renderCart();
updateCartCount();