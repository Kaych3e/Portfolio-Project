const products = [
  { image: "Images/john-smit-Mc5EwlPC3zA-unsplash.jpg", name: "Apple airpod pro", price: 65000},
  { image: "Images/c-d-x-PDX_a_82obo-unsplash.jpg", name: "Wireless PC Headset", price: 50000},
  { image: "Images/jannis-lucas-RHQiWqkKnCA-unsplash.jpg", name: "MacBook Pro", price: 500000},
  { image: "Images/v-a-tao-KGB8Ctwss90-unsplash.jpg", name: "Smart watch for Apple", price: 75000},
  { image: "Images/pS5.webp", name: "Games", price: null},
  { image: "Images/drone.jpeg", name: "Drones", price: null},
  { image: "Images/Apple-iPhone-14-Pro-Max.jpeg", name: "Phones", price: null},
  { image: "Images/samsungIpad.png", name: "Ipads", price: null},
  { image: "Images/apple-watches.jpeg", name: "Watches", price: null},
  { image: "Images/airpod-max.jpeg", name: "Airpods", price: null},
  { image: "Images/mac-mini-hero-202301_FMT_WHH.jpeg", name: "Imac Mini", price: null},
  { image: "Images/desktop.jpeg", name: "Desktops", price: null},
  { image: "Images/gaming pad.jpeg", name: "Gaming pad", price: 25000},
  { image: "Images/iphone.jpeg", name: "Iphone 12 pro max for Apple", price: 450000},
  { image: "Images/Apple_watch-experience-for-entire-family-hero_09152020_big.jpg.large.jpg", name: "Smart watch for ios", price: 75000},
  { image: "Images/AirPods-Android-featured-image.jpg", name: "Airpod for android ", price: 25000},
  { image: "Images/Ps4-slim.jpeg", name: "Ps4 Slim", price: 20000},
  { image: "Images/JBLspeaker.jpeg", name: "JBL Speaker", price: 50000},
  { image: "Images/macbook-pro.jpeg", name: "Apple MacBook", price: 500000},
  { image: "Images/Apple-Magic-Mouse-2-A1657.png", name: "Apple Wireless Mouse", price: 25000},
  { image: "Images/apple-ipad-pro.jpeg", name: "Apple ipad pro", price: 250000},
  { image: "Images/quaritsch-photography-m2zuB8DqwyM-unsplash.jpg", name: "Imac", price: 600000},
  { image: "Images/Apple-Watch-SE-aluminum-midnight-220907_inline.jpg.large.jpg", name: "Apple Watch", price: 7500000},
  { image: "Images/apple-airpod.jpeg", name: "Apple earpod", price: 25000},
  { image: "Images/12-pro-max.jpg", name: "Iphone 12 Pro Max", price: 300000},
  { image: "Images/apple-airpod.jpg", name: "Apple Airpod Max", price: 150000}
];

const containers = document.querySelectorAll("#product-container");

products.forEach((product, index) => {
  const productElement = document.createElement("div");
  productElement.classList.add("product");

  const formattedPrice = product.price !== null ? `Price: N${product.price.toLocaleString()}` : '';

  productElement.innerHTML = `
    <section>
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      ${formattedPrice ? `<span class="pricedata">${formattedPrice}</span>` : ''}
      ${index >= 12 ? '<br><button class="add-to-cart">Add to Cart</button>' : ''}
    </section>
  `;

  const addToCartButtons = productElement.querySelectorAll(".add-to-cart");
addToCartButtons.forEach(button => {
  button.addEventListener("click", () => {
    openAddToCartWindow(product);
  });
});

function openAddToCartWindow(product) {
  // Perform the logic to open the "Add to Cart" window
  // For example, you can show a modal or trigger a pop-up
  console.log(`Product "${product.name}" - Add to Cart window opened.`);
}

  containers.forEach(container => {
    container.appendChild(productElement.cloneNode(true));
  });
});

