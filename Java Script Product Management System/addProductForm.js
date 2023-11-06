// Append the form for adding a new product to the 'root' element
root.innerHTML += `
    <form id="add-product">
        <label for="name">Name:</label>
        <input type="text" name="name" id="name"/>
        <label for="price">Price:</label>
        <input type="number" name="price" id="price"/>
        <input type="submit"/>
    </form>
`;

// Adds functionality to the add product form
function addFormFunctionality() {
    const form = document.querySelector('#add-product');
    // Event listener for form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevents the default form submission action
        // Retrieves the phone name and price from the form
        const phoneName = event.target.name.value;
        const phonePrice = Number(event.target.price.value);
        // Creates a new phone object
        const newPhone = {
            name: phoneName,
            price: phonePrice
        };

        // Retrieve and update the product list in local storage
        const localStorageProducts = getProducts();
        localStorageProducts.push(newPhone);
        setProducts(localStorageProducts);

        // Rerender the updated product list
        renderProductList(localStorageProducts);
    });
}

// Initialize form functionality when the window is loaded
window.addEventListener('load', addFormFunctionality);
