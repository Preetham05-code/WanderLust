# 🏡 WanderLust

**WanderLust** is an AI-assisted MERN Stack vacation rental platform inspired by Airbnb, where users can explore, list, book, and review unique stays around the world — from cozy cabins and beachfront cottages to castles and private islands. It now features an integrated **AI Travel Assistant** that helps users discover listings and get travel guidance through natural conversation.

🔗 **Live Demo:** [wanderlust-554z.onrender.com/listings](https://wanderlust-554z.onrender.com/listings)

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=flat&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=flat&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white)
![EJS](https://img.shields.io/badge/EJS-90A93A?style=flat)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=flat&logo=bootstrap&logoColor=white)
![Google Gemini](https://img.shields.io/badge/Google%20Gemini-8E75B2?style=flat&logo=googlegemini&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat&logo=firebase&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-blue.svg)

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [AI Travel Assistant](#-ai-travel-assistant)
- [Project Architecture](#-project-architecture)
- [Project Preview](#-project-preview)
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

The platform has since been extended with an **AI Travel Assistant**, powered by **Google Gemini**, that connects directly to the MongoDB listings database. Users can ask travel-related questions in natural language and receive conversational, context-aware recommendations pulled from live listing data.

## ✨ Features

- 🔐 **Secure Authentication & Authorization** — Sign up, log in, and log out with session-based auth; supports traditional username/password authentication and Google Sign-In using Firebase Authentication.
- 🔑 **Google Sign-In** — Users can authenticate with their Google account through Firebase Authentication, while the verified Firebase identity is linked to the WanderLust user record and application session.
- 🏠 **Full CRUD for Listings** — Create, view, update, and delete property listings with title, description, price, location, and images.
- 🖼️ **Cloud Image Hosting** — Listing photos are uploaded and served via Cloudinary for fast, reliable delivery.
- 🗺️ **Interactive Maps** — Each listing displays its location on an embedded map using geocoding for real-world coordinates.
- ⭐ **Reviews & Ratings** — Users can leave star ratings and written reviews on listings, and delete their own reviews.
- 🔎 **Search & Category Filters** — Browse listings by trending categories such as Rooms, Iconic Cities, Castles, Beaches, Amazing Pools, Cabins, Camping, Arctic, Farms, and Domes.
- 💰 **Transparent Pricing** — Toggle to display total price including taxes (GST) alongside the nightly rate.
- 📱 **Responsive UI** — Clean, mobile-friendly interface styled with Bootstrap and custom CSS.
- ✅ **Server-Side Validation & Error Handling** — Schema validation (Joi) and centralized error middleware for robust, predictable behavior.
- 🍞 **Flash Messages** — Real-time success/error feedback for actions like login, listing creation, and reviews.
- 🤖 **AI Travel Assistant** — A conversational assistant that helps users find stays and answers travel-related questions.
- 🧭 **AI-Powered Listing Recommendations** — Suggests relevant listings pulled live from the MongoDB database.
- 🧠 **Conversation Memory** — Retains context across a conversation for more natural, coherent follow-ups.
- 🔗 **AI Connected to the Database** — The assistant queries real listing data rather than relying on static or hallucinated responses.
- 💬 **Natural Language Travel Assistance** — Ask questions in plain English and get concise, relevant answers.

## 🛠️ Tech Stack

| Layer               | Technology                                              |
|---------------------|----------------------------------------------------------|
| **Frontend**         | EJS, EJS-Mate (layouts), Bootstrap 5, CSS3, JavaScript   |
| **Backend**          | Node.js, Express.js                                      |
| **Database**         | MongoDB with Mongoose ODM                                |
| **Authentication**   | Passport.js (Local Strategy), Firebase Authentication, express-session |
| **Image Storage**    | Cloudinary + Multer                                       |
| **Maps/Geocoding**   | Leaflet.js + OpenStreetMap (OSM) + Node-Geocoder (OpenStreetMap Provider) |
| **AI Assistant**     | Google Gemini API + Express.js                            |
| **Validation**       | Joi                                                        |
| **Deployment**       | Render + MongoDB Atlas                                     |

## 🤖 AI Travel Assistant

WanderLust includes a built-in AI Travel Assistant that lets users get help and recommendations without leaving the chat window. It:

- Answers travel-related questions in natural language
- Recommends listings pulled live from the MongoDB database
- Uses conversation memory to maintain context across multiple turns
- Retrieves live data through an Express API rather than static content
- Returns concise, user-friendly responses suited for a chat interface

**Workflow:**

```
User
  ↓
WanderLust Chatbot
  ↓
Express Backend
  ↓
Google Gemini
  ↓
Listings API
  ↓
MongoDB
  ↓
AI Response
```

The assistant is integrated directly with **Google Gemini** through the application backend. Incoming chat messages are processed by the Express backend, which communicates with Gemini and, when needed, uses the Listings API to access live MongoDB listing data before returning a formatted response to the user.

## 🔐 Google Authentication

WanderLust supports Google Sign-In using **Firebase Authentication** while retaining the existing Passport.js authentication system.

**Authentication flow:**

```text
User
  ↓
Google Sign-In
  ↓
Firebase Authentication
  ↓
Firebase ID Token
  ↓
Express Backend
  ↓
Firebase Admin SDK verifies token
  ↓
MongoDB User
  ↓
Passport Session
  ↓
Authenticated WanderLust User
```

- Existing username/password authentication continues to use Passport.js.
- Google users are verified through Firebase Authentication.
- The Firebase UID is linked to the corresponding WanderLust user in MongoDB.
- After successful verification, a normal WanderLust Passport session is created.

## 🏗️ Project Architecture

WanderLust's core application follows the **MVC (Model-View-Controller)** pattern for clean separation of concerns:

```
Client Request → Routes → Controllers → Models (MongoDB) → Views (EJS) → Response
```

- **Models** define schemas for `User`, `Listing`, and `Review`.
- **Controllers** contain the business logic for each resource.
- **Routes** map HTTP endpoints to controller actions.
- **Views** render dynamic EJS templates for the UI.
- **Middleware** handles authentication checks, validation, and error catching.

The AI layer sits alongside this MVC structure as its own service:

```
Chat Request → AI Routes → AI Controller → AI Service → Google Gemini + MongoDB → AI Response
```

- **AI Routes** (`routes/ai.js`) expose the chatbot endpoint.
- **AI Controller** (`controllers/ai.js`) handles incoming chat requests and responses.
- **AI Service** (`services/aiService.js`) manages communication with the Google Gemini API and the application's AI workflow.
- **Google Gemini** processes the user's natural-language request and, when relevant, works with live listing data retrieved through the application backend.


## 🚀 Getting Started

Follow these steps to run WanderLust on your local machine.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [MongoDB](https://www.mongodb.com/) (local instance or a MongoDB Atlas connection string)
- npm (comes bundled with Node.js)
- A [Cloudinary](https://cloudinary.com/) account (for image uploads)
- A [Google Gemini](https://ai.google.dev/) API key (for the AI Travel Assistant)
- A [Firebase](https://firebase.google.com/) project with Google Authentication enabled (for Google Sign-In)

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

GEMINI_API_KEY=your_gemini_api_key

# Firebase Admin SDK (local development)
GOOGLE_APPLICATION_CREDENTIALS=path_to_firebase_service_account.json

# Firebase Admin SDK (production / Render)
FIREBASE_PROJECT_ID=your_firebase_project_id
FIREBASE_CLIENT_EMAIL=your_firebase_client_email
FIREBASE_PRIVATE_KEY=your_firebase_private_key
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

4. The AI Travel Assistant will be available from the chatbot UI once your `GEMINI_API_KEY` is configured. Google Sign-In requires the Firebase project and Firebase Authentication configuration to be set up.

## 📁 Folder Structure

```
WanderLust/
├── controllers/         # Business logic for listings, reviews, users, AI
│   └── ai.js            # AI chatbot request handling
├── models/               # Mongoose schemas (Listing, Review, User)
├── routes/               # Express route definitions
│   └── ai.js             # AI chatbot API routes
├── services/             # External service integrations
│   └── aiService.js      # Handles communication with the Google Gemini API
├── views/                # EJS templates and partials
│   ├── layouts/
│   ├── listings/
│   ├── users/
│   └── includes/
├── public/               # Static assets (CSS, JS, images)
├── utils/                # Helper utilities (wrapAsync, ExpressError)
├── middleware.js         # Auth & validation middleware
├── schema.js             # Joi validation schemas
├── cloudConfig.js         # Cloudinary configuration
├── app.js                # Application entry point
├── package.json
└── .env
```

## 🗺️ Roadmap

- [ ] Online payment integration (Razorpay / Stripe)
- [ ] Wishlist / saved listings
- [ ] Booking calendar with availability tracking
- [ ] Host dashboard with analytics
- [x] Google Sign-In authentication
- [ ] Email notifications for bookings and reviews
- [ ] Personalized AI itinerary generation
- [ ] Voice-enabled AI assistant
- [ ] AI-based travel recommendations tailored to user preferences

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
- [Google Gemini](https://ai.google.dev/) for powering the AI Travel Assistant
- [Firebase](https://firebase.google.com/) for Google Authentication
- [Render](https://render.com/) for deployment

## 📬 Contact

**Preetham** — feel free to reach out via GitHub for questions, suggestions, or collaboration.

🔗 **Project Link:** [github.com/Preetham05-code/WanderLust](https://github.com/Preetham05-code/WanderLust)
🔗 **Live Demo:** [wanderlust-554z.onrender.com/listings](https://wanderlust-554z.onrender.com/listings)

---

<p align="center">If you found this project helpful, consider giving it a ⭐ on GitHub!</p>
