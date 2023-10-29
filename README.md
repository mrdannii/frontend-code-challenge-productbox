# ProductBox Frontend Challenge


## Table of Contents
- [Description](#description)
- [Demo](#demo)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)

## Description
### RandoStore
I created using React and Tailwind CSS. It is a simple e-commerce website that allows users to browse, buy, and sell products.

### Features

- Users can view a list of all products or filter them by category, price, or rating.
- Users can add products to their cart and checkout with a mock payment system.
- Users can also sell their own products by filling out a form with product details and uploading an image.
- The form uses Formik and Yup for validation and error handling.
- Users can view the details of each product, such as description, reviews, and seller information.
- The website has a responsive design that adapts to different screen sizes and devices.

### Features
- Home: This is the landing page that shows a welcome message and some featured products.
- All Products: This is the page that shows all the products available for sale. Users can filter and sort the products by various criteria.
- Cart: This is the page that shows the items in the user’s cart. Users can edit the quantity or remove items from their cart. They can also proceed to checkout and complete their order.
- Error: This is the page that shows an error message when something goes wrong, such as a network failure or an invalid URL.
- Add New Product: This is the page that allows users to sell their own products. Users have to fill out a form with product details and upload an image. The form uses Formik and Yup for validation and error handling.
- Product Details: This is the page that shows the details of a specific product, such as description, reviews, and seller information. Users can also add the product to their cart or write a review.

## Demo
[Demo Video](https://github.com/mrdannii/frontend-code-challenge-productbox/assets/129685268/d59657cb-c5de-4e8c-b439-52c254e71d19)

## Getting Started
Install the package dependencies by running the following command ```npm install ```
```bash
npm start
npm install json-server
json-server --watch init_data.json --port 3001
```
Once the server is running, you can access the start page by opening your browser to ```http://localhost:3000```     
The Items JSON REST API is exposed at ```http://localhost:3001/items```     
### API Endpoints  
```bash
/items/
- HTTP GET: returns array of all items
- HTTP POST: creates a new item, returns the created item data
/items/:id
- HTTP GET: returns the item with given id (numeric, auto-incrementing). HTTP 404 if item not found
- HTTP DELETE: removes the items with given id, returns nothing (HTTP 204)
```

### Prerequisites
 React-app  ```-For frontend```   
 React-router-dom ```-For Routing```   
 JSON-server ```-For JsonDB and api```    
 Axios ```-For making HTTP requests ```  
 Formik and Yup ```-For React Form Validation```  

