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

// WISHLIST FEATURE
const wishlistInput = document.getElementById("wishlist-input");
const wishlistAddBtn = document.getElementById("wishlist-add-btn");
const wishlistItems = document.getElementById("wishlist-items");

wishlistAddBtn.addEventListener("click", () => {
  const itemName = wishlistInput.value.trim();

  if (itemName === "") {
    return; // don't add empty items
  }

  addWishlistItem(itemName);
  wishlistInput.value = ""; // clear input after adding
});

function addWishlistItem(name) {
  const li = document.createElement("li");
  li.textContent = name;

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.className = "remove-btn";

  removeBtn.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(removeBtn);
  wishlistItems.appendChild(li);
}

// CONTACT FORM VALIDATION
const contactForm = document.getElementById("contact-form");
const formFeedback = document.getElementById("form-feedback");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault(); // stop the page from reloading

  const name = document.getElementById("contact-name").value.trim();
  const email = document.getElementById("contact-email").value.trim();
  const message = document.getElementById("contact-message").value.trim();

  // Basic validation checks
  if (name === "" || email === "" || message === "") {
    formFeedback.textContent = "Please fill in all fields before sending.";
    formFeedback.style.color = "red";
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    formFeedback.textContent = "Please enter a valid email address.";
    formFeedback.style.color = "red";
    return;
  }

  // If everything passes:
  formFeedback.textContent = "Thanks, " + name + "! Your message has been received.";
  formFeedback.style.color = "lightgreen";

  contactForm.reset(); // clear the form after successful submit
});