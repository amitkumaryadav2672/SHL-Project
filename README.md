# 🔍 Assessment Recommendation System (SHL)

A full-stack web application that recommends relevant **SHL assessments** based on a user’s job requirement or hiring query.  
Users can search using natural language (e.g. *"java developer teamwork"*) and get matching assessments with direct SHL links.

---

## 🚀 Features

- 🔎 Search assessments using free-text queries
- 🎯 Intelligent keyword matching on real SHL data
- 📋 Clean, expandable result cards
- 🔗 Direct redirect to SHL assessment pages
- ⚡ Fast response using preloaded JSON data
- 🖥️ Modern frontend built with **React**
- 🛠️ REST API backend using **Node.js & Express**

---

## 🧠 How It Works

1. User enters a hiring query (job role, skills, duration, etc.)
2. Backend matches keywords against SHL assessment dataset
3. Relevant assessments are returned
4. Frontend displays expandable cards:
   - Assessment Query
   - Assessment URL (clickable)

---

## 🧩 Tech Stack

### Frontend
- React
- Axios
- CSS (Flexbox / Cards UI)

### Backend
- Node.js
- Express.js
- File-based JSON datastore
- Custom keyword matcher logic

---

## 🔧 Backend Setup

```bash
cd Backend
npm install
npm start
Server runs on:

arduino
Copy code
http://localhost:5000
🎨 Frontend Setup
bash
Copy code
cd Frontend
npm install
npm run dev
Frontend runs on:

arduino
Copy code
http://localhost:5173
📡 API Endpoint
POST /recommend
Request Body

json
Copy code
{
  "query": "java developer teamwork"
}
Response

json
Copy code
{
  "query": "java developer teamwork",
  "total_found": 3,
  "recommendations": [
    {
      "Query": "...",
      "Assessment_url": "https://www.shl.com/..."
    }
  ]
}
