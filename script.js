const products = [
  { name: "Amaya Wireless Bluetooth", price: 1500, image: "Amaya.jpeg", rating: 4 },
  { name: "Amaya USB Cable", price: 200, image: "amaya.jpg", rating: 5 },
  { name: "Original Amaya Type C", price: 1500, image: "c.JPG", rating: 4 },
  { name: "Solar Light", price: 750, image: "solar.jpg", rating: 3 },
  { name: "Snake Lights", price: 800, image: "snake lights.jpg", rating: 5 },
   { name: "Bab  Astra  Extension", price: 450, image: "exten.jpeg", rating: 3 },
  { name: "Snake light", price: 800, image: "snalight.jpeg", rating: 5 },
   { name: "Mens Classic Watch", price: 400, image: "watch.jpeg", rating: 3 },
  { name: "Mens Watch startar", price: 450, image: "watch2.jpeg", rating: 5 },
   { name: "Head phones soft", price: 1500, image: "headphones.jpg", rating: 3 },
  { name: "Stop Watch", price: 450, image: "stopwatch.jpeg", rating: 5 },
   { name: "Women classic bag", price: 200, image: "200 bag.jpg", rating: 3 },
  { name: "Sunday best for Women", price: 280, image: "280 bag.jpg", rating: 5 },
   { name: "Flower bag", price: 400, image: "400 bag.jpg", rating: 3 },
  { name: "Afya soap Anti-bacteria 100g", price: 80, image: "Afya soap.jpg", rating: 5 },
   { name: "compound solar light", price: 3500, image: "compound solar light.jpg", rating: 3 },
  { name: "Detrex black Antibacteria 80g ", price: 50, image: "detrexblack.jpeg", rating: 5 },
   { name: "Detrex Green Antibacteria 80g", price: 50, image: "soap green.jpeg", rating: 3 },
  { name: "Robot", price: 350, image: "robot.jpg", rating: 5 },
   { name: "Neck Headset", price: 650, image: "Neck headset.jpg", rating: 3 },
  { name: "Rechargeable DPLIGHT", price: 450, image: "Rec bulb.jpg", rating: 5 },
   { name: "Solar Light 50W", price: 800, image: "Rlight 50w.jpg", rating: 3 },
  { name: "Solar Gate Light", price: 1500, image: "solar gatelight.jpg", rating: 5 },
   { name: "DLight Solar Lantern", price: 400, image: "dlight.jpg", rating: 3 },
   { name: "ABJ Bass Earphones", price: 200, image: "ABJ Bass Earphones 250.png", rating: 5 },
  { name: "ABJ D 13 Earphone", price: 250, image: "ABJ D 13 Earphone 250.png", rating: 4 },
  { name: "Aloevera Beauty Planet Lotion 250ml", price: 150, image: "Aloevera Beauty Planet Lotion 250 ml 150.png", rating: 3 },
  { name: "Amaya full charger", price: 450, image: "Amaya full charger 450.png", rating: 5 },
   { name: "Bag class D", price: 200, image: "Bag class D 200.png", rating: 3 },
  { name: "Checked Ladies bag", price: 450, image: "Checked Ladies bag.png", rating: 5 },
   { name: "Classic Bag Class A", price: 750, image: "Classic Bag Class A 700.png", rating: 3 },
  { name: "Classic Bag Class C", price: 400, image: "Classic Bag Class C 400.png", rating: 5 },
   { name: "Classic ladies bag", price: 280, image: "Classic ladies bag 280.png", rating: 3 },
  { name: "Earphone GO-40", price: 150, image: "Earphone GO-40 150.png", rating: 5 },
   { name: "Executive hand bag", price: 250, image: "Executive hand bag 250.png", rating: 3 },
  { name: "handbag class B ", price: 250, image: "handbag class B 250.png", rating: 5 },
   { name: "Handbag2 Class B", price: 250, image: "Handbag2 Class B 250.png", rating: 3 },
  { name: "Handbag3 Class B", price: 250, image: "Handbag3 Class B 250.png", rating: 5 },
   { name: "Jack Pin", price: 100, image: "Jack Pin 100.png", rating: 3 },
  { name: "Long lasting BL BATTERY", price: 400, image: "Long lasting BL BATTERY 400.png", rating: 5 },
   { name: "Neem Beauty Planet Lotion 250ml", price: 150, image: "Neem Beauty Planet Lotion 250 ml 150.png", rating: 3 },
  { name: "OFIA HT-118 Earphone", price: 250, image: "OFIA HT-118 Earphone 250.png", rating: 5 },
   { name: "Oraimo Full Charger", price: 450, image: "Oraimo Full Charger 450.png", rating: 3 },
  { name: "Original Extension", price: 450, image: "Original Extension 450.png", rating: 5 },
   { name: "School Watch", price: 130, image: "School Watch 130.png", rating: 3 },
  { name: "School watch", price: 150, image: "School watch 150.png", rating: 5 },
   { name: "DLight Solar Lantern", price: 400, image: "dlight.jpg", rating: 3 },
    { name: "Advance Flash 8gb", price: 650, image: "Advance Flash 8gb 650.JPG", rating: 5 },
   { name: "Memory card 4gb", price: 400, image: "Memory card 4gb 400.JPG", rating: 3 },
  { name: "Advance Flash 16GB", price: 800, image: "Advance Flash 16GB 800.jpeg", rating: 4 },
   { name: "Flash Advance 4gb", price: 500, image: "Flash Advance 4gb 500.jpeg", rating: 3 },
     { name: "X UK Laptops, Coi 5 HP ", price: 25000, image: "X UK Laptops, Coi 5 HP.JPG", rating: 4 },
   { name: "Desktop COMPLETE Different specs.", price:0, image: "Desktop COMPLETE.jpg", rating: 3 },
     { name: "Handbag2 Class B", price: 250, image: "Handbag2 Class B 250.png", rating: 3 },
  { name: "Handbag3 Class B", price: 250, image: "Handbag3 Class B 250.png", rating: 5 },
   { name: "Epson EcoTank L3250 Wi-Fi All-in-One Printer.", price:28000, image: "Epson EcoTank L3250 Wi-Fi All-in-One Printe.JPG", rating: 3 },
];
const cart = {};

function displayProducts() {
  const container = document.getElementById("product-list");
  container.innerHTML = "";
  products.forEach((product, index) => {
    const div = document.createElement("div");
    div.className = "product-card";

    const stars = "★".repeat(product.rating) + "☆".repeat(5 - product.rating);

    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h4>${product.name}</h4>
      <p>Ksh ${product.price}</p>
      <div class="rating">${stars}</div>
      <button onclick="addToCart(${index})">Add to Cart</button>
    `;
    container.appendChild(div);
  });
}

function addToCart(index) {
  const product = products[index];
  if (cart[product.name]) {
    cart[product.name].quantity += 1;
  } else {
    cart[product.name] = {
      price: product.price,
      quantity: 1
    };
  }
  updateCart();
  updateCartCount();
}

function removeFromCart(name) {
  if (cart[name]) {
    cart[name].quantity -= 1;
    if (cart[name].quantity <= 0) {
      delete cart[name];
    }
  }
  updateCart();
  updateCartCount();
}

function updateCart() {
  const cartList = document.getElementById("cart");
  cartList.innerHTML = "";
  let total = 0;

  for (const [name, details] of Object.entries(cart)) {
    const itemTotal = details.price * details.quantity;
    total += itemTotal;
    const li = document.createElement("li");
    li.innerHTML = `
      ${name} - ${details.quantity} x Ksh ${details.price} = Ksh ${itemTotal}
      <button onclick="removeFromCart('${name}')">Remove</button>
    `;
    cartList.appendChild(li);
  }

  if (total > 0) {
    const summary = document.createElement("li");
    summary.innerHTML = `<strong>Total: Ksh ${total}</strong>`;
    cartList.appendChild(summary);
  } else {
    cartList.innerHTML = "<li>Your cart is empty.</li>";
  }

  updateCartCount(); // Also call here just in case
}

function updateCartCount() {
  const cartCount = document.getElementById("cart-count");
  let totalItems = 0;

  for (const item of Object.values(cart)) {
    totalItems += item.quantity;
  }

  cartCount.textContent = totalItems;
}

function checkout() {
  let message = "Order Summary:\n";
  let total = 0;

  for (const [name, details] of Object.entries(cart)) {
    message += `- ${name}: ${details.quantity} x Ksh ${details.price}\n`;
    total += details.price * details.quantity;
  }

  if (total === 0) {
    alert("Your cart is empty.");
    return;
  }

  message += `\nTotal: Ksh ${total}`;
  const whatsappUrl = `https://wa.me/254759064950?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
}

displayProducts();