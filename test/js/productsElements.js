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
  { image: "Images/v-a-tao-KGB8Ctwss90-unsplash.jpg", name: "Smart watch for Apple", price: 75000},
  { image: "Images/v-a-tao-KGB8Ctwss90-unsplash.jpg", name: "Smart watch for Apple", price: 75000}
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
      ${formattedPrice ? `<span>${formattedPrice}</span>` : ''}
      ${index >= 12 && index <= 15 ? '<button class="add-to-cart">Add to Cart</button>' : ''}
    </section>
  `;

  containers.forEach(container => {
    container.appendChild(productElement.cloneNode(true));
  });
});
