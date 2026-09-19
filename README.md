# BlogHub

BlogHub is a responsive full-stack Blog Application developed using **HTML, CSS, JavaScript, Node.js, and Express.js**.

## Project Description

BlogHub allows users to register an account, login, access a dashboard, create blog posts, and view blogs.

The project was developed as part of the **Codomax Digital Solutions Internship**.

## Features

* Responsive Home Page
* User Registration
* User Login
* Dashboard
* Create Blog
* View Blogs
* Blog Categories
* REST APIs
* Frontend and Backend Integration
* Basic JavaScript Form Validation
* Responsive Design
* Interactive Navigation

## Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript
* VS Code
* Live Server

### Backend

* Node.js
* Express.js
* REST APIs
* CORS
* dotenv

## API Endpoints

### User Registration

```text
POST /api/register
```

### User Login

```text
POST /api/login
```

### Create Blog

```text
POST /api/blogs
```

### View Blogs

```text
GET /api/blogs
```

## Project Structure

```text
BlogHub/
│
├── frontend/
│   ├── pages/
│   │   ├── index.html
│   │   ├── login.html
│   │   ├── register.html
│   │   ├── dashboard.html
│   │   ├── create-blog.html
│   │   └── blogs.html
│   │
│   ├── css/
│   │   └── style.css
│   │
│   ├── js/
│   │   └── script.js
│   │
│   └── images/
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── blogRoutes.js
│   │
│   ├── package.json
│   └── server.js
│
├── .gitignore
└── README.md
```

## How to Run

### Backend

Open the terminal in the project folder:

```bash
cd backend
npm install
node server.js
```

The backend server runs on:

```text
http://localhost:5000
```

### Frontend

1. Open the project in VS Code.
2. Open `frontend/pages/index.html`.
3. Right-click the file.
4. Select **Open with Live Server**.
5. The BlogHub website will open in your browser.

## API Testing

The REST APIs were tested successfully using **Postman**.

Tested APIs:

* User Registration
* User Login
* Create Blog
* View Blogs

## Internship

This project was developed as part of the **Codomax Digital Solutions Internship**.

## Author

**Namana Pujitha**
