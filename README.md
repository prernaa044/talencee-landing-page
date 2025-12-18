# Talencee Landing Page Clone

This project is a full-stack MERN landing page clone developed as part of an assignment submission.  
The objective was to recreate the Talencee landing page UI and implement a structured frontend-backend workflow following industry practices.

---

## 🔧 Tech Stack

### Frontend
- React.js
- HTML5
- CSS3
- JavaScript
- Responsive UI

### Backend
- Node.js
- Express.js
- MongoDB
- REST APIs

---

## 📁 Project Structure


talencee-landing-page/
│
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   ├── favicon.ico
│   │   ├── manifest.json
│   │   └── robots.txt
│   │
│   ├── src/
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   ├── index.css
│   │   └── assets/
│   │
│   ├── package.json
│   └── package-lock.json
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── jobs.json
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
__README.md

---

## ▶️ Run Project Locally

### Frontend
```bash
cd frontend
npm install
npm start

Runs on:
http://localhost:3000

Backend
cd backend
npm install
node server.js

Runs on:
http://localhost:5000


🌐 Deployment Details

Frontend Deployment
	•	Frontend is deployed using Netlify
	•	Netlify supports static frontend deployment only

Backend Deployment
	•	Backend requires a Node.js server and environment variables
	•	Backend deployment is not supported directly on Netlify

⸻

⚠️ Submit Button & Email Clarification
	•	The Submit button is fully functional locally
	•	On Netlify:
	•	Backend APIs are not connected
	•	Hence form submission does not persist data
	•	SMTP email service does not trigger

Reason:

Netlify does not support backend execution or SMTP services without a separate backend host.

⸻

🔐 Environment Variables Required

The backend requires the following environment variables to function fully:
REGME_KEY=your_regme_key_here
MONGO_URI=your_mongodb_connection
SMTP_EMAIL=your_email
SMTP_PASSWORD=your_password

Without these environment variables:
	•	Data submission will not be saved
	•	Emails will not be sent

⸻

📝 Notes & Assumptions
	•	This was my first full-scale MERN stack project
	•	The focus was on:
	•	Clean UI
	•	Proper project structuring
	•	Separation of frontend and backend
	•	Significant time was spent learning deployment workflows
	•	The project reflects both implementation and learning effort

Acknowledgement

Thank you for reviewing this assignment.
This project helped strengthen my understanding of full-stack development, debugging, and deployment practices.

