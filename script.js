const products = [
  {
    name: "Product 1",
    price: 1500,
    description: "Premium quality product.",
    image: "images/product1.jpg"
  },
  {
    name: "Product 2",
    price: 2000,
    description: "Best seller item.",
    image: "images/product2.jpg"
  },
  {
    name: "Product 3",
    price: 1800,
    description: "Limited stock available.",
    image: "images/product3.jpg"
  },
  {
    name: "Product 4",
    price: 2200,
    description: "Top rated product.",
    image: "images/product4.jpg"
  }
];

const productList = document.getElementById("product-list");
const modal = document.getElementById("product-modal");
const closeBtn = document.getElementById("close-btn");

const modalImage = document.getElementById("modal-image");
const modalName = document.getElementById("modal-name");
const modalPrice = document.getElementById("modal-price");
const modalDescription = document.getElementById("modal-description");
const buyNowBtn = document.getElementById("buy-now");

let selectedProduct = null;

products.forEach((product) => {
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
    <img src="${product.image}" loading="lazy">
    <h3>${product.name}</h3>
    <p>৳${product.price}</p>
  `;
  card.onclick = () => openModal(product);
  productList.appendChild(card);
});

function openModal(product) {
  selectedProduct = product;
  modalImage.src = product.image;
  modalName.innerText = product.name;
  modalPrice.innerText = "৳" + product.price;
  modalDescription.innerText = product.description;
  modal.classList.remove("hidden");
}

closeBtn.onclick = () => {
  modal.classList.add("hidden");
};

buyNowBtn.onclick = () => {
  const phone = "8801972854293"; // your WhatsApp number
  const message = `Hello, I want to buy ${selectedProduct.name} for ৳${selectedProduct.price}`;
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};


