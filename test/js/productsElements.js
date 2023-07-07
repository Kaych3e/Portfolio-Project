const products = [
  { image: "Images/john-smit-Mc5EwlPC3zA-unsplash.jpg", name: "Apple airpod pro", price: 65000},
  { image: "Images/c-d-x-PDX_a_82obo-unsplash.jpg", name: "Wireless PC Headset", price: 50000},
  { image: "Images/jannis-lucas-RHQiWqkKnCA-unsplash.jpg", name: "MacBook Pro", price: 500000},
  { image: "Images/v-a-tao-KGB8Ctwss90-unsplash.jpg", name: "Smart watch for Apple", price: 75000},
  { image: "Images/john-smit-Mc5EwlPC3zA-unsplash.jpg", name: "Apple airpod pro", price: 65000},
  { image: "Images/c-d-x-PDX_a_82obo-unsplash.jpg", name: "Wireless PC Headset", price: 50000},
  { image: "Images/jannis-lucas-RHQiWqkKnCA-unsplash.jpg", name: "MacBook Pro", price: 500000},
  { image: "Images/v-a-tao-KGB8Ctwss90-unsplash.jpg", name: "Smart watch for Apple", price: 75000}
];

const containers = document.querySelectorAll("#product-container");

products.forEach(product => {
  const productElement = document.createElement("div");
  productElement.classList.add("product");

  const formattedPrice = product.price.toLocaleString(); // Format the price with comma separators

  productElement.innerHTML = `
    <section>
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <span>Price: N${formattedPrice}</span>
    </section>
  `;

  containers.forEach(container => {
    container.appendChild(productElement.cloneNode(true));
  });
});
