# React Apple Full Stack Application 🍎

## 📘 Overview

**React Apple Full Stack Application** is a complete web application built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js). It includes both frontend and backend code and demonstrates user authentication, data storage, REST APIs, and a responsive React UI.

This project is organized into separate `client` (frontend) and `server` (backend) folders for a clean and modular structure.

---

## ⭐ Features

* User can see apple company products
* REST API backend
* Mysql database connection
* React frontend with modern UI
* Environment variable support

## 🧱 Tech Stack

| Layer    | Technologies              |
| -------- | ------------------------- |
| Frontend | React.js, JavaScript, CSS |
| Backend  | Node.js, Express.js       |
| Database | MySql    |
| Utils    | Axios, dotenv             |

---

## 📁 Project Structure

```
react-apple-full-stack-application/
├── client/        # React frontend
├── server/        # Express backend API
├── .gitignore
└── README.md
```

---

## 📥 Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/Bereket110/react-apple-full-stack-application.git
cd react-apple-full-stack-application
```

---

### 2. Setup Backend

```bash
cd server
npm install
```

Create a `.env` file in the **server** folder with:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

Now start the backend:

```bash
npm run dev
```

---

### 3. Setup Frontend

Open a separate terminal:

```bash
cd client
npm install
npm run dev
```

Your frontend should start and run at:

```
http://localhost:3000
```

---

## 🔧 Environment Variables

Make sure this `.env` file is inside the **server** folder:

```
PORT
MONGO_URI
JWT_SECRET
```

