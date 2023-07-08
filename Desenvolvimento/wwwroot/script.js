window.addEventListener('load', function() {
    fetch('api/products')
      .then(response => response.json())
      .then(products => displayProducts(products));
  });
  
  function displayProducts(products) {
    const productsList = document.getElementById('products-list');
    products.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('product');
  
      const productName = document.createElement('h2');
      productName.textContent = product.name;
      productDiv.appendChild(productName);
  
      const productPrice = document.createElement('p');
      productPrice.textContent = `Price: $${product.price}`;
      productDiv.appendChild(productPrice);
  
      const productCondition = document.createElement('p');
      productCondition.textContent = `Condition: ${product.condition}`;
      productDiv.appendChild(productCondition);
  
      productsList.appendChild(productDiv);
    });
  }
  