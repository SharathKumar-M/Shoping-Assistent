const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const messageEl = document.getElementById("message");
const results = document.getElementById("results");
const priceList = document.getElementById("priceList");
const productNameEl = document.getElementById("productName");
const bestDealEl = document.getElementById("bestDeal");

searchBtn.addEventListener("click", searchProduct);

// Fake product data (later we replace with API)
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

  // Clear old UI
  priceList.innerHTML = "";
  messageEl.textContent = "";

  const stores = products[query];

  productNameEl.textContent = query.toUpperCase();
  results.classList.remove("hidden");

  const productImg = document.getElementById("productImg");

  fetchProductImage(query).then(imgUrl => {
    productImg.scr = imgUrl;
    productImg.classList.remove("hidden");
  });

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

async function fetchProductImage(query) {
    try {
        const url =  `https://source.unsplash.com/400x400/?${encodeURIComponent(query)}`;
        return url;

    }   catch (err) {
        console.log("Image error:", err);
        return "";

    }
    
}