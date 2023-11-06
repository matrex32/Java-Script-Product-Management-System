// Select the root element where all content will be attached
const root = document.querySelector('#root');

// Initial product data
const products = [
    {
        image:'https://i.ibb.co/DKQLKXn/Apple-i-Phone-XS-Max-Gold-1000-0001.jpg',
        name: 'Iphone XS',
        price: 4500,
        releaseYear: 2018,
        dateWhenAdded: '04-11-2020',
        id: '1'
    },
    {
        image: 'https://i.ibb.co/McL0Lf6/Huawei-P30-Pro-Aurora.png',
        name: 'Huawei P30',
        price: 4000,
        releaseYear: 2017,
        dateWhenAdded: '01-02-2021',
        id: '2'
    },
    {
        image: 'https://i.ibb.co/ch6S28b/images.jpg',
        name: 'Samsung S10',
        price: 4250,
        releaseYear: 2019,
        dateWhenAdded: '02-06-2022',
        id: '3'
    }
];

// Function to retrieve products from localStorage
function getProducts() {
    const localStorageProducts = localStorage.getItem("products");
    const parsedProducts = JSON.parse(localStorageProducts);
    return parsedProducts || products; // Return initial products if localStorage is empty
}

// Function to save products to localStorage
function setProducts(products) {
    const stringifiedProducts = JSON.stringify(products);
    localStorage.setItem("products", stringifiedProducts);
}

// Initialize localStorage with default products if not already present
if (!localStorage.getItem("products")){
    setProducts(products);
}

// Function to render all products
function renderProductList(productArray) {
    const productListElement = document.createElement('ul');
    productListElement.id = 'product-list';
    root.appendChild(productListElement);

    // Clear the current list
    productListElement.innerHTML = '';
    // Render each product using the Product class
    productArray.forEach(productData => {
        const product = new Product(
            productData.name,
            productData.price,
            productData.image,
            productData.releaseYear,
            productData.dateWhenAdded,
            productData.id
        );
        product.renderProduct();
    });
}

// Class for creating and rendering products
class Product {
    // Product constructor
    constructor(name, price, image, releaseYear, dateWhenAdded, id) {
        this.name = name;
        this.price = price;
        this.image = image;
        this.releaseYear = releaseYear;
        this.dateWhenAdded = dateWhenAdded;
        this.id = id;
    }

    // Method to render individual product
    renderProduct() {
        const productList = document.querySelector('#product-list');
        productList.innerHTML += `
        <li class="product">
            <img src="${this.image}" alt="${this.name}">
            <p>Name: ${this.name}</p>
            <p>Price: ${this.price}</p>
            <p>Release Year: ${this.releaseYear}</p>
            <p>Date Added: ${this.dateWhenAdded}</p>
            <button class="delete" data-id="${this.id}">Delete</button>
        </li>
        `;
    }
}

// Function to delete a product
function deleteProduct(productId) {
    let products = getProducts();
    products = products.filter(product => product.id !== productId);
    setProducts(products);
    renderProductList(products); 
}