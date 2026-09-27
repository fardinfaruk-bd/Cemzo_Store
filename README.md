# Cemzo Store — Product Listing Page

A responsive product listing page built with React and Tailwind CSS. The application fetches product data from the DummyJSON API and provides search, category filtering, price sorting, pagination, and proper loading/error/empty states.

## Live Demo
http://cemzo-store-kappa.vercel.app

---

## Features

* Responsive product listing
* Product data fetched from DummyJSON API
* Search products by title
* Filter products by category
* Sort products by price

  * Price: Low to High
  * Price: High to Low
* Pagination
* Loading spinner
* Error state
* Empty search result state
* Reusable React components
* Context API for global product state management
* Mobile, tablet, and desktop responsive UI

---

## Technologies Used

* React.js
* Vite
* JavaScript (ES6+)
* Tailwind CSS
* DaisyUI
* Context API
* DummyJSON API
* Git & GitHub

---

## API

Product data is fetched from:

`https://dummyjson.com/products?limit=0`

The API provides product information including:

* Product title
* Product image
* Price
* Category
* Rating

---

## Project Structure

```text
src/
├── components/
│   ├── Layout.jsx
│   ├── Navbar.jsx
│   ├── CategoryFilter.jsx
│   ├── SortFilter.jsx
│   ├── ProductCard.jsx
│   ├── ProductGrid.jsx
│   ├── Pagination.jsx
│   ├── Loading.jsx
│   ├── ErrorMessage.jsx
│   └── EmptyState.jsx
│
├── context/
│   └── ProductContext.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## Installation & Setup

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the project directory

```bash
cd cemzo_store
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

---

## Available Scripts

### Development

```bash
npm run dev
```

Starts the Vite development server.

### Production Build

```bash
npm run build
```

Creates an optimized production build.

### Preview Production Build

```bash
npm run preview
```

Previews the production build locally.

---

## How It Works

### Product Fetching

Products are fetched from the DummyJSON API using React's `useEffect`.

### Search

Users can search products by their title using the search input in the navbar.

### Category Filtering

Products can be filtered by category using the category filter.

### Price Sorting

Products can be sorted by price:

```text
Default
Price: Low to High
Price: High to Low
```

### Pagination

The product list displays 12 products per page.

Pagination automatically updates when the user:

* Searches for a product
* Changes the category
* Changes the price sorting

The page resets to page 1 whenever a new search, category, or sorting option is selected.

---

## State Management

The project uses React Context API to manage shared product-related state.

`ProductContext.jsx` handles:

* Product data
* Search state
* Category state
* Sorting state
* Pagination state
* Loading state
* Error state
* Filtered products
* Sorted products
* Paginated products

This keeps the components reusable and avoids unnecessary prop drilling.

---

## UI States

The application handles three important UI states:

### Loading

A loading spinner is displayed while products are being fetched.

### Error

A user-friendly error message is displayed if the API request fails.

### Empty

A helpful empty state is displayed when no products match the current search or filter.

---

## Responsive Design

The interface is designed to work across:

* 📱 Mobile
* 📱 Tablet
* 💻 Desktop

The product grid automatically adjusts based on screen size.

---

## Future Improvements

Some possible future enhancements:

* Product details modal
* Product details page
* Add to cart functionality
* Wishlist functionality
* Advanced filtering
* Price range filter
* Better pagination controls
* Skeleton loading UI

---

## Author

**Md Fardin Faruk**

Frontend Developer

---

## License

This project was created for an assignment/demo purpose.
