# SaaS CRM Landing Page

A responsive full-stack SaaS CRM landing page built with **React**, **Node.js**, **Express**, and **MongoDB**. The application includes a modern landing page with a product inquiry system and RESTful APIs for managing inquiries. Docker support is included for easy setup and deployment.

---

## 🚀 Features

### Frontend

* Responsive design (Desktop, Tablet & Mobile)
* Hero Section
* Features Section
* Pricing Section
* Testimonials
* FAQ Section
* Contact Sales / Product Inquiry Form
* Client-side form validation
* Clean and reusable React components

### Backend

* RESTful API using Node.js and Express.js
* Create product inquiries
* Retrieve all inquiries
* Delete inquiries
* MongoDB database integration

### Additional Features

* Docker & Docker Compose support
* Environment variable configuration
* Modular project structure

---

## 🛠 Tech Stack

### Frontend

* React.js (Vite)
* JavaScript
* CSS

### Backend

* Node.js
* Express.js

### Database

* MongoDB

### Tools

* Docker
* Git & GitHub

---

## 📂 Project Structure

```text
saas-crm-landing-page/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── routes/
│   ├── models/
│   ├── controllers/
│   ├── server.js
│   └── package.json
│
├── docker-compose.yml
├── README.md
└── .env.example
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/saas-crm-landing-page.git
cd saas-crm-landing-page
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
npm install
npm start
```

---

## 🐳 Running with Docker

```bash
docker compose up --build
```

---

## 🔐 Environment Variables

Create a `.env` file inside the backend directory.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

---

## 📡 API Documentation

### Create Inquiry

**POST** `/api/inquiry`

Request Body

```json
{
  "fullName": "John Doe",
  "companyName": "ABC Pvt Ltd",
  "email": "john@example.com",
  "phone": "9876543210",
  "country": "India",
  "industry": "Technology",
  "companySize": "50-100",
  "message": "Interested in your CRM solution."
}
```

---

### Get All Inquiries

**GET** `/api/inquiry`

Returns all stored inquiries.

---

### Delete Inquiry

**DELETE** `/api/inquiry/:id`

Deletes an inquiry by its ID.

---

## 📱 Responsive Design

The application is fully responsive and optimized for:

* Desktop
* Tablet
* Mobile

---

## 📌 Future Improvements

* Admin Dashboard
* Search & Filtering
* Authentication
* Unit Testing
* CI/CD Pipeline

---

## 👤 Author

**Sumit Bhatia**

GitHub: https://github.com/Sumit0-hash/saas-crm-landing-page
