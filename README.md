# Java-Script-Product-Management-System
This repository contains a simple web application designed to manage a catalog of products using JavaScript and Web Storage API. Users can view products, filter them by price criteria, and delete them from the list.

Features
Display Products: A list of products is displayed on the page with details including name, price, release year, and a product image.
Filter Functionality: Users can filter products based on price criteria (e.g., price greater than 4200).
Deletion Capability: Products can be deleted from the list which will also update the local storage.
Persistent Storage: Products are stored in the browser's localStorage, making the data persistent between sessions.

How It Works
The application is structured as follows:

Data Initialization: On first load, if no products exist in localStorage, a predefined list of products is added to it.
Rendering: Products are rendered on the page by retrieving them from localStorage.
Filtering: A button allows users to filter the displayed products based on their price.
Deletion: Each product has a delete button that, when clicked, will remove the product from localStorage and update the display.

Technologies Used
HTML
CSS (assuming styling is part of the project)
JavaScript
Web Storage API
