# Amazon-Clone

A full-featured e-commerce web application inspired by Amazon, built with React and Firebase in a monorepo architecture. This project simulates a real-world online shopping platform with user authentication, product browsing, cart management, and order processing.

---

## Features

- User authentication with Firebase Authentication (email/password, Google sign-in)
- Real-time database with Firebase Firestore for product, cart, and order data
- Browse and search products by category and keyword
- Add, update, and remove items from the shopping cart
- Checkout flow with order summary and order storage
- Responsive design optimized for desktop and mobile
- Monorepo setup for clean project structure and scalable development
- CI/CD pipelines with GitHub Actions and Docker support

---

## Technologies Used

- **Frontend:** React.js (Create React App or Next.js)
- **Backend:** Firebase Firestore & Firebase Cloud Functions (serverless)
- **Authentication:** Firebase Authentication
- **State Management:** React Context API / Redux (if used)
- **Hosting:** Firebase Hosting
- **Monorepo Tools:** (e.g., Yarn Workspaces, Lerna, or Nx — specify what you use)
- **CI/CD:** GitHub Actions, Docker

---

## Project Structure (Monorepo)


---

## Getting Started

### Prerequisites

- Node.js (v14+ recommended)
- Firebase CLI (`npm install -g firebase-tools`)
- Yarn or npm

### Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/amazon-clone.git
   cd amazon-clone
yarn install
# or
npm install
