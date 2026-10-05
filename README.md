# BlogHub

BlogHub is a full-stack blogging web application developed as part of the Codomax Digital Solutions Internship.

The application allows users to register and login securely, create blog posts, view all available blogs, and read individual blog details. The project integrates a Node.js and Express.js backend with MongoDB Atlas for database management.

## Features

* User Registration
* Secure Password Hashing using bcrypt
* User Login
* Login State Management
* User Logout
* Protected Dashboard Access
* Create Blog Posts
* Store Blog Posts in MongoDB
* Retrieve All Blogs
* Individual Blog Details Page
* Blog Categories
* Responsive User Interface

## Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript

### Backend

* Node.js
* Express.js
* REST APIs

### Database

* MongoDB Atlas
* Mongoose

### Security

* bcrypt password hashing
* Input validation
* Protected dashboard access

### Tools

* Git
* GitHub
* Visual Studio Code
* Postman
* MongoDB Atlas

## Project Structure

```text
BlogHub/
│
├── frontend/
│   ├── html/
│   │   ├── index.html
│   │   ├── login.html
│   │   ├── register.html
│   │   ├── dashboard.html
│   │   ├── create-blog.html
│   │   └── blog-details.html
│   │
│   ├── css/
│   │   └── style.css
│   │
│   └── js/
│       └── script.js
│
├── backend/
│   ├── config/
│   │   └── db.js
│   │
│   ├── models/
│   │   ├── User.js
│   │   └── Blog.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── blogRoutes.js
│   │
│   ├── controllers/
│   │
│   ├── .env
│   ├── server.js
│   └── package.json
│
└── README.md
```

## Application Flow

### User Authentication

```text
Register
   ↓
Backend API
   ↓
bcrypt Password Hashing
   ↓
MongoDB Atlas
   ↓
User Account Created
```

### Login

```text
Login
   ↓
Backend API
   ↓
Password Verification
   ↓
Login Successful
   ↓
Dashboard
```

### Blog Management

```text
Create Blog
   ↓
POST /api/blogs
   ↓
MongoDB Atlas
   ↓
Blog Stored
```

### Blog Retrieval

```text
Dashboard
   ↓
GET /api/blogs
   ↓
MongoDB
   ↓
All Blogs Displayed
   ↓
Read More
   ↓
GET /api/blogs/:id
   ↓
Blog Details
```

## API Endpoints

| Method | Endpoint         | Purpose                |
| ------ | ---------------- | ---------------------- |
| POST   | `/api/register`  | Register a new user    |
| POST   | `/api/login`     | Authenticate user      |
| POST   | `/api/blogs`     | Create a new blog      |
| GET    | `/api/blogs`     | Retrieve all blogs     |
| GET    | `/api/blogs/:id` | Retrieve a single blog |

## Database

MongoDB Atlas is used as the cloud database.

The application stores:

### Users

* Name
* Email
* Hashed Password

### Blogs

* Title
* Content
* Category
* Author
* Created Date
* Updated Date

Passwords are never stored as plain text. They are hashed using bcrypt before being stored in the database.

## Testing

The backend APIs were tested using Postman.

The following operations were tested:

* User Registration
* User Login
* Blog Creation
* Retrieve All Blogs
* Retrieve Individual Blog

## Project Outcome

BlogHub demonstrates the integration of a responsive frontend, RESTful backend APIs, secure password handling, and MongoDB database integration into a complete full-stack web application.

## Internship

Developed as part of the **Codomax Digital Solutions Internship**.

## Author

**Pujitha**
B.Tech CSE – Cyber Security
Swarnandhra College of Engineering and Technology
