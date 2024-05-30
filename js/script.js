




let cartTotalPrice = 0;
let totalProductQuantity = 0;
function addToCart(productElement) {
  const productPrice = parseInt(productElement.getAttribute('data-price'));
  cartTotalPrice += productPrice;
  const formattedTotalPrice = cartTotalPrice.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
  document.querySelector('.cart-total').textContent = 'Tổng tiền: ' + formattedTotalPrice;
  totalProductQuantity++;
  document.getElementById('total-quantity').textContent = totalProductQuantity;
  alert('"' + productElement.parentNode.querySelector('.pro_title').textContent + '" đã được thêm vào giỏ hàng!');
function addToCart(productElement, quantity) {
  const productRow = document.createElement('tr');
  productRow.classList.add('shoping__cart__item');
  const productImageCell = document.createElement('td');
  productImageCell.classList.add('shoping__cart__item');
  productImageCell.innerHTML = `
    <img src="<span class="math-inline">\{productElement\.dataset\.imageUrl\}" alt\="" width\="100px"\>
<h5\></span>{productElement.dataset.productName}</h5>
  `;
  
  productRow.appendChild(productImageCell);
  const productPriceCell = document.createElement('td');
  productPriceCell.classList.add('shoping__cart__price');
  productPriceCell.textContent = formattedProductPrice;
  productRow.appendChild(productPriceCell);

  const productQuantityCell = document.createElement('td');
  productQuantityCell.classList.add('shoping__cart__quantity');
  productQuantityCell.innerHTML = `
    <div class="quantity">
      <div class="pro-qty">
        <input type="number" min="1" value="${quantity}" id="quantity">
        <button onclick="updateQuantity(this)">Cập nhật</button>
      </div>
    </div>
  `;
  productRow.appendChild(productQuantityCell);

  
  const productTotalPriceCell = document.createElement('td');
  productTotalPriceCell.classList.add('shoping__cart__total');
  productTotalPriceCell.textContent = formattedProductPrice; // Use existing logic to format the price
  productRow.appendChild(productTotalPriceCell);

  // Remove item button
  const removeItemCell = document.createElement('td');
  removeItemCell.classList.add('shoping__cart__item__close');
  removeItemCell.innerHTML = '<span class="icon_close"></span>';
  productRow.appendChild(removeItemCell);

  // Append the new row to the cart table
  document.querySelector('tbody').appendChild(productRow);

  // Update cart totals
  cartTotalPrice += productPrice * quantity;
  totalProductQuantity += quantity;

  // Update cart summary (optional)
  updateCartSummary();

  
}

// Function to update quantity within a cart item (optional)
function updateQuantity(buttonElement) {
  // ... (existing logic to get current quantity and update it) ...

  // Update product total price cell
  const productTotalPriceCell = buttonElement.parentElement.parentElement.nextElementSibling;
  productTotalPriceCell.textContent = formattedNewTotalPrice; // Use logic to format the new total price

  // Update cart totals
  cartTotalPrice = recalculateCartTotalPrice(); // Replace with logic
}





const marquee = document.getElementById('promotionMarquee');

marquee.addEventListener('mouseover', () => {
  // Pause the animation when hovering
  marquee.style.animationPlayState = 'paused';

  // Optionally, add a visual cue to indicate the paused state
  marquee.classList.add('marquee-paused'); // Add a CSS class for styling
});

marquee.addEventListener('mouseout', () => {
  // Resume the animation when mouse leaves
  marquee.style.animationPlayState = 'running';

  // Remove the visual cue if added
  marquee.classList.remove('marquee-paused');
});


}