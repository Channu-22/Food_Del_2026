Food Delivery Application
A full-stack food delivery web application built with the MERN stack, featuring user authentication, shopping cart functionality, payment processing, and an admin dashboard for managing food items and orders.
🌐 Live Demo

Frontend: https://food-del-channu-frontend.onrender.com/
Admin Panel: https://food-del-channu-adminpanel.onrender.com

📋 Features
User Features

Authentication: Secure user signup and login using JWT tokens
Browse Menu: View a diverse selection of 32+ food items across multiple categories
Shopping Cart: Add items to cart with quantity adjustment using +/- controls
Payment Integration: Complete purchases securely through Stripe payment gateway
Order Tracking: View order history and track current orders
Responsive Design: Seamless experience across all devices

Admin Features

Item Management: Add new food items to the menu with details and images
Inventory Control: View and manage complete list of available food items
Order Management: Monitor and process customer orders in real-time
Dashboard: Centralized admin panel for all management operations

🍽️ Food Categories
The application offers a wide variety of food items organized into the following categories:

Salad - Fresh and healthy salad options
Rolls - Delicious wrapped rolls with various fillings
Deserts - Sweet treats and ice cream varieties
Sandwich - Classic and gourmet sandwich selections
Cake - Freshly baked cakes for every occasion
Pure Veg - Vegetarian specialties and dishes
Pasta - Italian pasta dishes with various sauces
Noodles - Asian-inspired noodle preparations

🛠️ Technology Stack
Frontend

React.js - UI library for building interactive interfaces
Context API - Global state management for cart and user data
React Router DOM - Client-side routing and navigation
Axios - HTTP client for API requests
CSS3 - Modern styling and responsive design

Backend

Node.js - JavaScript runtime environment
Express.js - Web application framework
MongoDB - NoSQL database for data storage
JWT - JSON Web Tokens for authentication and authorization
Stripe API - Payment processing integration

🔐 Authentication & Authorization

JWT-based authentication system for secure user sessions
Token-based authorization for protected routes
Separate authentication flows for users and admin
Secure password handling and validation

💳 Payment Integration

Integrated Stripe payment gateway for secure transactions
Real-time payment processing
Order confirmation after successful payment
Support for multiple payment methods

📁 Project Structure
├── admin/          # Admin panel application
├── backend/        # Server-side application
├── frontend/       # Client-side application
├── .gitignore      # Git ignore configuration
└── README.md       # Project documentation
🚀 Getting Started
Prerequisites

Node.js (v14 or higher)
MongoDB database
Stripe account for payment processing