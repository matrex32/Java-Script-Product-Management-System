// Product class that includes rendering the product to the DOM
class Product {
    constructor(name, price, image, releaseYear, dateWhenAdded, id) {
        this.name = name;
        this.price = price;
        this.image = image;
        this.releaseYear = releaseYear;
        this.dateWhenAdded = dateWhenAdded;
        this.id = id;
    }

    // Renders a single product to the product list
    renderProduct() {
        const productList = document.querySelector('#product-list');
        productList.innerHTML += `
        <li 
            class="product">
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