// Featured Collection products
const featuredProducts = [
  { name: "Urban Sneakers", price: "ksh 3500", image: "Pictures/Urban Sneakers.jpeg" },
  { name: "Executive Leather", price: "ksh 4500", image: "Pictures/official dark tan.jpeg" },
  { name: "Performance Runner", price: "ksh 3500", image: "Pictures/Performance Runner.jpeg" }
];

// New Arrivals products
const newArrivals = [
  { name: "Clogs", price: "ksh 1500", image: "Pictures/clogs.jpeg" },
  { name: "Sandals", price: "ksh 2000", image: "Pictures/Brown sandles.jpeg" },
  { name: "Black Leather", price: "ksh 3000", image: "Pictures/Black leather leather shoes.jpeg" }
];

// Function to render a list of products into a given container
function renderProducts(productArray, containerId) {
  const container = document.getElementById(containerId);

  productArray.forEach(product => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.price}</p>
      <button class="add-to-cart-btn">Add to Cart</button>
    `;

    // Attach click event to this card's button (no inline onclick)
    const btn = card.querySelector(".add-to-cart-btn");
    btn.addEventListener("click", () => {
      alert(product.name + " added to cart!");
    });

    container.appendChild(card);
  });
}

// Render both sections on page load
renderProducts(featuredProducts, "featured-grid");
renderProducts(newArrivals, "new-arrivals-grid");

// ==========================
// FEATURE 2 & 4: WISHLIST (add/remove + localStorage persistence)
// ==========================
const wishlistInput = document.getElementById("wishlist-input");
const wishlistAddBtn = document.getElementById("wishlist-add-btn");
const wishlistItems = document.getElementById("wishlist-items");

// ⭐ FEATURE 4: Load saved wishlist from localStorage when the page opens
let savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

// ⭐ FEATURE 4: Re-display whatever was saved, immediately on page load
savedWishlist.forEach(name => addWishlistItem(name, false));

wishlistAddBtn.addEventListener("click", () => {
  const itemName = wishlistInput.value.trim();
  if (itemName === "") return;
  addWishlistItem(itemName, true);
  wishlistInput.value = "";
});

function addWishlistItem(name, saveToStorage) {
  const li = document.createElement("li");
  li.textContent = name;

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.className = "remove-btn";

  removeBtn.addEventListener("click", () => {
    li.remove();
    removeFromStorage(name);
  });

  li.appendChild(removeBtn);
  wishlistItems.appendChild(li);

  // ⭐ FEATURE 4: Save the new item into localStorage
  if (saveToStorage) {
    savedWishlist.push(name);
    localStorage.setItem("wishlist", JSON.stringify(savedWishlist));
  }
}

// ⭐ FEATURE 4: Keep localStorage in sync when an item is removed
function removeFromStorage(name) {
  const index = savedWishlist.indexOf(name);
  if (index !== -1) {
    savedWishlist.splice(index, 1);
    localStorage.setItem("wishlist", JSON.stringify(savedWishlist));
  }
}
const heroBanner = document.getElementById("hero-banner");

heroBanner.addEventListener("click", () => {
  heroBanner.classList.toggle("show-caption");
});