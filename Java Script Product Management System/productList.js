// Append a title and a list element to the 'root' element where the products will be displayed
root.innerHTML += `
    <h2>Phone:</h2>
    <ul id="product-list"></ul>
`;

// Function to render all products to the DOM
function renderProductList(products) {
    // Get the DOM element where products will be listed
    const productList = document.querySelector('#product-list');
    // Clear the product list before rendering new products
    productList.innerHTML = '';
    // Loop through each product and render it on the page
    products.forEach(function (product) {
        // Create a new Product instance for each product
        const phone = new Product(product.name, product.price, product.image, product.releaseYear, product.dateWhenAdded, product.id);
        // Call the renderProduct method to append the product to the DOM
        phone.renderProduct();
    });

    // Select all delete buttons and add a click event listener to them
    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', function() {
            // Get the product ID from the button's data attribute
            const productId = this.getAttribute('data-id');
            // Call the deleteProduct function to delete the selected product
            deleteProduct(productId); 
        });
    });
}