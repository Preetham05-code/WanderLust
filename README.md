# 🏡 WanderLust

**WanderLust** is a full-stack, Airbnb-inspired vacation rental platform where users can explore, list, book, and review unique stays around the world — from cozy cabins and beachfront cottages to castles and private islands.

🔗 **Live Demo:** [wanderlust-554z.onrender.com/listings](https://wanderlust-554z.onrender.com/listings)

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=flat&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=flat&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white)
![EJS](https://img.shields.io/badge/EJS-90A93A?style=flat)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=flat&logo=bootstrap&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue.svg)

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Architecture](#-project-architecture)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running Locally](#running-locally)
- [Folder Structure](#-folder-structure)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [License](#-license)
- [Acknowledgements](#-acknowledgements)
- [Contact](#-contact)

---

## 🌍 Overview

WanderLust brings the core Airbnb experience to life — hosts can list their properties with photos, pricing, and location details, while travelers can browse, search, filter by category, and book stays that match their vibe. Built with a classic and battle-tested **MVC architecture** (Node.js + Express + MongoDB + EJS), the project is a hands-on demonstration of full-stack web development: authentication, CRUD operations, file/image uploads, geolocation, and server-side rendering — all wired together into one cohesive booking platform.

## ✨ Features

- 🔐 **Secure Authentication & Authorization** — Sign up, log in, and log out with session-based auth; only owners can edit or delete their own listings/reviews.
- 🏠 **Full CRUD for Listings** — Create, view, update, and delete property listings with title, description, price, location, and images.
- 🖼️ **Cloud Image Hosting** — Listing photos are uploaded and served via Cloudinary for fast, reliable delivery.
- 🗺️ **Interactive Maps** — Each listing displays its location on an embedded map using geocoding for real-world coordinates.
- ⭐ **Reviews & Ratings** — Users can leave star ratings and written reviews on listings, and delete their own reviews.
- 🔎 **Search & Category Filters** — Browse listings by trending categories such as Rooms, Iconic Cities, Castles, Beaches, Amazing Pools, Cabins, Camping, Arctic, Farms, and Domes.
- 💰 **Transparent Pricing** — Toggle to display total price including taxes (GST) alongside the nightly rate.
- 📱 **Responsive UI** — Clean, mobile-friendly interface styled with Bootstrap and custom CSS.
- ✅ **Server-Side Validation & Error Handling** — Schema validation (Joi) and centralized error middleware for robust, predictable behavior.
- 🍞 **Flash Messages** — Real-time success/error feedback for actions like login, listing creation, and reviews.

## 🛠️ Tech Stack

| Layer               | Technology                                              |
|---------------------|----------------------------------------------------------|
| **Frontend**         | EJS, EJS-Mate (layouts), Bootstrap 5, CSS3, JavaScript   |
| **Backend**          | Node.js, Express.js                                      |
| **Database**         | MongoDB with Mongoose ODM                                |
| **Authentication**   | Passport.js (Local Strategy), express-session            |
| **Image Storage**    | Cloudinary + Multer                                       |
| **Maps/Geocoding**   | Leaflet.js + OpenStreetMap (OSM) + Node-Geocoder (OpenStreetMap Provider)                                                  |
| **Validation**       | Joi                                                        |
| **Deployment**       | Render + MongoDB Atlas                                     |

> ⚠️ Adjust this table if your actual repo swaps out any of these (e.g., a different map provider or OAuth instead of local auth) — I based this on your live deployment's features since the GitHub link you shared returned a 404.

## 🏗️ Project Architecture

WanderLust follows the **MVC (Model-View-Controller)** pattern for clean separation of concerns:

```
Client Request → Routes → Controllers → Models (MongoDB) → Views (EJS) → Response
```

- **Models** define schemas for `User`, `Listing`, and `Review`.
- **Controllers** contain the business logic for each resource.
- **Routes** map HTTP endpoints to controller actions.
- **Views** render dynamic EJS templates for the UI.
- **Middleware** handles authentication checks, validation, and error catching.

## 🚀 Getting Started

Follow these steps to run WanderLust on your local machine.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [MongoDB](https://www.mongodb.com/) (local instance or a MongoDB Atlas connection string)
- npm (comes bundled with Node.js)
- A [Cloudinary](https://cloudinary.com/) account (for image uploads)


### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Preetham05-code/WanderLust.git
   cd WanderLust
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

### Environment Variables

Create a `.env` file in the root directory and add the following:

```env
ATLASDB_URL=your_mongodb_connection_string
SECRET=your_session_secret

CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
```

> 🔒 Never commit your `.env` file. Make sure it's listed in `.gitignore`.

### Running Locally

1. **Start MongoDB** (skip if using MongoDB Atlas)
   ```bash
   sudo systemctl start mongod
   ```

2. **Start the server**
   ```bash
   node app.js
   ```
   or, with auto-restart during development:
   ```bash
   npx nodemon app.js
   ```

3. **Open your browser** and visit:
   ```
   http://localhost:8080/listings
   ```

## 📁 Folder Structure

```
WanderLust/
├── controllers/        # Business logic for listings, reviews, users
├── models/              # Mongoose schemas (Listing, Review, User)
├── routes/              # Express route definitions
├── views/               # EJS templates and partials
│   ├── layouts/
│   ├── listings/
│   ├── users/
│   └── includes/
├── public/              # Static assets (CSS, JS, images)
├── utils/               # Helper utilities (wrapAsync, ExpressError)
├── middleware.js        # Auth & validation middleware
├── schema.js            # Joi validation schemas
├── cloudConfig.js        # Cloudinary configuration
├── app.js               # Application entry point
├── package.json
└── .env
```


## 🗺️ Roadmap

- [ ] Online payment integration (Razorpay / Stripe)
- [ ] Wishlist / saved listings
- [ ] Booking calendar with availability tracking
- [ ] Host dashboard with analytics
- [ ] Google / GitHub OAuth login
- [ ] Email notifications for bookings and reviews

## 🤝 Contributing

Contributions are welcome and appreciated!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please open an issue first to discuss major changes.

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgements

- Inspired by [Airbnb](https://www.airbnb.com/)
- [Bootstrap](https://getbootstrap.com/) for UI components
- [Cloudinary](https://cloudinary.com/) for media hosting
- [Render](https://render.com/) for deployment

## 📬 Contact

**Preetham** — feel free to reach out via GitHub for questions, suggestions, or collaboration.

🔗 **Project Link:** [github.com/Preetham05-code/WanderLust](https://github.com/Preetham05-code/WanderLust)
🔗 **Live Demo:** [wanderlust-554z.onrender.com/listings](https://wanderlust-554z.onrender.com/listings)

---

<p align="center">If you found this project helpful, consider giving it a ⭐ on GitHub!</p>
