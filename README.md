OpenFashion Mobile App

Overview

OpenFashion is a React Native-based mobile application designed for fashion enthusiasts to explore, add to cart, and purchase fashion products. This app features a user-friendly interface, product listing, detailed product descriptions, cart management, and a checkout system. The app leverages AsyncStorage for local data persistence and Axios for API requests to fetch product data.

Features

Home Screen: Displays a list of fashion products fetched from an API.
Product Details: Detailed view of a selected product, including images, descriptions, price, and care instructions.
Cart Management: Add and remove products from the cart, view cart items, and proceed to checkout.
Persistent Cart: Cart items are saved locally using AsyncStorage, ensuring they persist across app sessions.
Screens

Home: Displays a grid of products with images, names, categories, and prices. Users can add products to their cart.
Details: Shows detailed information about a selected product.
Cart: Shows products added to the cart, with the ability to remove items and proceed to checkout.
Technologies Used

React Native: For building the mobile application.
AsyncStorage: For local storage of cart items.
Axios: For making API requests to fetch product data.
React Navigation: For navigation between screens.
Installation

Clone the Repository:

bash
Copy code
git clone https://github.com/Albert-Andrews/rn-assignment7-11118701.git
cd openfashion
Install Dependencies:

bash
Copy code
npm install
Running the App:

For iOS:
bash
Copy code
npx pod-install ios
npm run ios
For Android:
bash
Copy code
npm run android
Usage

Home Screen
Fetch Products: On initial load, products are fetched from https://fakestoreapi.com/products and displayed in a grid format.
Add to Cart: Tap on a product to add it to the cart. An icon overlay indicates that the product can be added.
Details Screen
Product Information: Displays detailed information about the selected product, including title, category, description, price, and care instructions.
Care Instructions: Specific icons and texts provide care instructions for the product.
Cart Screen
View Cart Items: Displays a list of products added to the cart.
Remove Items: Tap the cancel icon to remove an item from the cart.
Checkout: View the estimated total price and proceed to checkout.
Contribution

Contributions are welcome! Feel free to open an issue or submit a pull request.

License

This project is licensed under the MIT License.

Contact

For any inquiries, please contact [aaaquaye001@st.ug.edu.gh].


#Dtails Page
![alt text](<assets/Simulator Screenshot - iPhone 15 Pro Max - 2024-07-11 at 18.47.20.png>)


#Home
![alt text](<assets/Simulator Screenshot - iPhone 15 Pro Max - 2024-07-12 at 18.34.52.png>)


#Drawer
![alt text](<assets/Simulator Screenshot - iPhone 15 Pro Max - 2024-07-12 at 18.35.01.png>)

#Cart
![alt text](<assets/Simulator Screenshot - iPhone 15 Pro Max - 2024-07-12 at 18.35.49.png>)


#Loadin state
![alt text](<assets/Simulator Screenshot - iPhone 15 Pro Max - 2024-07-12 at 18.42.17.png>)