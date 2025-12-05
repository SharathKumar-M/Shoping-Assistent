// Get elements
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const messageEl = document.getElementById("message");
const results = document.getElementById("results");
const priceList = document.getElementById("priceList");
const productNameEl = document.getElementById("ProductName");
const bestDealEl = document.getElementById("bestDeal");
const productImg = document.getElementById("productImg");
const suggestionsBox = document.getElementById("suggestions")

// Fake product data
const products = {
  "iphone": [
    { store: "Amazon", price: 69999 },
    { store: "Flipkart", price: 65999 },
    { store: "Croma", price: 68999 }
  ],
  "headphones": [
    { store: "Amazon", price: 1999 },
    { store: "Flipkart", price: 1799 },
    { store: "Reliance Digital", price: 1899 }
  ]
};

searchBtn.addEventListener("click", searchProduct);

function searchProduct() {
  const query = searchInput.value.toLowerCase().trim();

  if (!query) {
    messageEl.textContent = "Enter a product name!";
    return;
  }

  if (!products[query]) {
    messageEl.textContent = "Product not found!";
    results.classList.add("hidden");
    return;
  }

  // Clear UI
  priceList.innerHTML = "";
  messageEl.textContent = "";

  const stores = products[query];

  productNameEl.textContent = query.toUpperCase();
  results.classList.remove("hidden");

  // Load image
  productImg.src = `https://source.unsplash.com/400x400/?${encodeURIComponent(query)}`;
  productImg.classList.remove("hidden");

  // Find best deal
  let lowest = stores[0];

  stores.forEach(item => {
    if (item.price < lowest.price) lowest = item;

    const div = document.createElement("div");
    div.className = "store-box";
    div.innerHTML = `
      <span>${item.store}</span>: ₹${item.price}
    `;
    priceList.appendChild(div);
  });

  bestDealEl.textContent = `💰 Best Deal: ${lowest.store} - ₹${lowest.price}`;
}

const productNames = Object.keys(product);

searchInput.addEventListener("input", ()=> {
  const text = searchInput.value.toLowerCase().trim();
  

})
