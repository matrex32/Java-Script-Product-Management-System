// Append buttons for sorting the product list to the 'root' element
root.innerHTML += `
    <button id="sort-by-price">Sort by price</button>
    <button id="sort-by-date-added">Sort by date added</button>
    <button id="sort-by-release-year">Sort by release year</button>
`;

// Function to sort the phones based on a given criteria
function sortPhones(sortType) {
    // Retrieve products from local storage
    const localStorageProducts = getProducts();
    let sortedArray;

    // Use a switch statement to determine the sort type
    switch(sortType) {
        case "SORT_BY_PRICE":
            // Sort by price in ascending order
            sortedArray = localStorageProducts.sort((a, b) => a.price - b.price);
            break;
        case "SORT_BY_RELEASE_YEAR":
            // Sort by release year in ascending order
            sortedArray = localStorageProducts.sort((a,b) => a.releaseYear - b.releaseYear);
            break;
        case "SORT_BY_DATE_ADDED":
            // Sort by date added in ascending order
            sortedArray = localStorageProducts.sort((a,b) => new Date(a.dateWhenAdded) - new Date(b.dateWhenAdded));
            break;
    }

    // Save the sorted array back to local storage and re-render the product list
    setProducts(sortedArray);
    renderProductList(sortedArray);
}

// Function to add functionality to the sorting buttons
function addSortingFunctionality() {
    // Select each sort button and add a click event listener
    const sortByPrice = document.querySelector('#sort-by-price');
    sortByPrice.addEventListener('click', function() {
        sortPhones('SORT_BY_PRICE');
    })

    const sortByReleaseYear = document.querySelector('#sort-by-release-year');
    sortByReleaseYear.addEventListener('click', function() {
        sortPhones('SORT_BY_RELEASE_YEAR');
    });

    const sortByDateAdded = document.querySelector('#sort-by-date-added');
    sortByDateAdded.addEventListener('click', function() {
        sortPhones('SORT_BY_DATE_ADDED');
    });
}

// Add the sorting functionality when the window loads
window.addEventListener('load', addSortingFunctionality);





