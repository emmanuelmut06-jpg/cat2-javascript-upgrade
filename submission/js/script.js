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