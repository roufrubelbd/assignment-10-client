# TechBridge Asia

**TechBridge Asia** is a global trade management web application that helps users efficiently manage import and export products between countries.  
This platform simplifies inventory handling, pricing, and cross-border trade operations.

🔗 **Live Site:** https://assignment-10-business-hub.web.app

---

##  Features

- **Role-Based Access Control:**  
  Exporters and importers have separate dashboards to manage their specific operations.

- **Product Management:**  
  Users can add, update, and delete their own export or import products with full CRUD functionality.

  - **User Dashboard (Activity Overview):**
Each logged-in user gets a personalized dashboard that provides:

Summary cards showing total exports and total imports

A visual analytics chart displaying import vs export activity over time

A recent activity table showing latest imported products

Quick access to user-specific actions like managing exports, imports, and logout

- **Download CSV Support:**  
  Export product lists directly to CSV format with a single click for offline record keeping.

- **Light/Dark Theme Support:**  
  Switch between light and dark modes using a simple toggle (powered by DaisyUI + Tailwind CSS).

- **Authentication & Authorization:**  
  Firebase authentication ensures secure login and access to protected routes.

- **Modern Stack:**  
  Built using **React 19**, **React Router 7**, **Axios**, **Tailwind CSS**, **DaisyUI**, and **SweetAlert2** for an elegant UI/UX.

---

## User Dashboard Activities

The User Dashboard acts as a centralized control panel where users can:

View a welcome section with user identity

Monitor trade performance using charts and analytics

Track import and export history

Quickly navigate to:

Add new export products

Manage imported items

View detailed product information

Securely log out from the dashboard dropdown

This dashboard ensures users can make informed decisions using real-time visual data.


## Tech Stack

- **Frontend:** React, Tailwind CSS, DaisyUI, Framer Motion
- **Routing:** React Router
- **State Management:** React Context API
- **Notifications:** React Hot Toast, SweetAlert2
- **Data Handling:** Axios, React CSV
- **Backend:** Express.js + MongoDB
