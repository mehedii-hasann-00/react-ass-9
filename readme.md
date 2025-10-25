# 🌱 GreenNest – Indoor Plant E-Commerce Web App

**GreenNest** is a responsive, single-page web application built for plant enthusiasts who want to explore, learn, and shop for healthy indoor plants.  
It blends elegant design, Firebase-powered authentication, and dynamic content to create a smooth, user-friendly experience — reflecting real-world software quality assurance and front-end engineering skills.

---

## ✨ Features

### 🏡 Homepage
- **Hero Section:** Nature-inspired design with subtle animations using Tailwind + Framer Motion.  
- **Top-Rated Plants:** Dynamically fetched from JSON and sorted by rating.  
- **Plant of the Week:** A creative featured-plant section highlighting one standout item.  
- **Care Tips Section:** Quick plant-care guide with clean iconography (LineIcons).  
- **Meet the Experts:** Showcases expert profiles and specializations.

---

### 🪴 Plants Section
- Displays all indoor plants from a JSON dataset.
- Each card includes **image, name, price, rating, and category**.
- Clicking **“View Details”** opens a **protected route** with full plant info.

---

### 🔒 Protected Plant Details Page
- Accessible only to logged-in users (via `PrivateRoute`).
- If unauthenticated → redirects to **Login**, then returns to the same page after login.
- Includes plant image, description, price, stock, and rating.
- **Consultation Form** at bottom with success toast feedback.

---

### 👤 Authentication (Firebase)
- Login, Signup, and Profile pages built with **Firebase Authentication**.
- Supports:
  - ✅ Email & Password Login / Signup  
  - ✅ Google Sign-In (Popup)
  - ✅ Forgot Password (with Gmail redirect)
- Context-based auth (`AppsContext`) keeps user data globally accessible.
- Protected routes use `onAuthStateChanged` to persist sessions.

---

### 🌿 Profile Page
- Displays logged-in user info (name, email, profile image).
- “Update Profile” button updates `displayName` and `photoURL` in Firebase.

---

## 🧠 Technologies Used

| Category | Stack |
|-----------|-------|
| **Frontend Framework** | React (Vite) |
| **Styling** | Tailwind CSS |
| **Routing** | React Router DOM |
| **Auth & Backend** | Firebase Authentication |
| **UI Enhancements** | LineIcons, Framer Motion, Toastify |
| **Hosting** | Netlify |
| **Data Source** | Local `plants.json` file (mock dataset) |

---

### 🔐 Authentication Flow
1. **User visits protected page** (e.g., `/plants/2`).
2. If not logged in → redirected to `/login`.
3. After login → automatically redirected back to `/plants/2`.
4. Google sign-in and email/password both supported.

---

### 🚀 Deployment
- Deployed on **Netlify**  
- Firebase Authorized Domains configured for:
  - `localhost`
  - `your-app-name.netlify.app`

---

### 🧩 Folder Structure

