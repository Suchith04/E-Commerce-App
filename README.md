# 🛍️ Mock E-Com Cart (Vibe Commerce Internship Assignment)

A **basic full-stack shopping cart application** built for the Vibe Commerce internship screening.  
This project demonstrates frontend–backend integration, REST APIs, and database usage for typical e-commerce flows.

> ⚠️ Note: This is a simplified version due to time constraints — **user authentication, login, and authorization are not implemented yet** but are planned as future enhancements.

---

## 🚀 Tech Stack

**Frontend:** React, Context API, React Router  
**Backend:** Node.js, Express.js  
**Database:** MongoDB (Mongoose)  
**Communication:** REST APIs  
**Deployment:** GitHub repository only (no live hosting)

---

## 🧩 Features

- Browse mock product listings  
- Add/remove items from cart  
- Update item quantities  
- Checkout flow with receipt modal  
- Responsive design for mobile & desktop  

---

## 🧰 Installation & Run

### 1️⃣ Clone the repository

git clone https://github.com/Suchith04/E-Commerce-App.git
cd E-Commerce-App

2️⃣ Install dependencies

Frontend and backend are separate folders. Run the following in each:

# For frontend
cd frontend
npm install

# For backend
cd ../server
npm install

3️⃣ Start the application

Run backend first, then frontend (in separate terminals):

# Backend (runs on port 5000)
npm start

# Frontend (runs on port 5173)
npm start




🎥 Demo Video

🔗 Demo Video Link (https://youtu.be/6kcNbNIse-c)

🔌 API Endpoints

Method	Endpoint	     Description

GET	    **/api/products**	 (Fetch list of mock products)

GET	    **/api/cart**	     (Fetch current cart with total)

POST	  **/api/cart	Add**  (product to cart ({ productId, qty })

DELETE	**/api/cart/:id**	 (Remove product from cart)

POST	  **/api/checkout**	 (Complete mock checkout & get receipt)

🧱 Folder Structure
frontend/
 ┣ components/
 ┣ context/
 ┣ App.jsx
 ┗ index.js

backend/
 ┣ controllers/
 ┣ models/
 ┣ routes/
 ┗ server.js

🌱 Future Improvements & Scope

✅ Add User Authentication (Login / Signup)
✅ Implement JWT-based protected routes
✅ Add Order History & Persistence
✅ Integrate a real payment gateway (Stripe / Razorpay)
✅ Improve UI with animations and toast notifications
✅ Deploy to cloud (e.g., Render / Vercel / MongoDB Atlas)


🧑‍💻 Author
Suchith Marupaka
