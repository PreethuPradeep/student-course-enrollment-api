
# Student-Course Enrollment API

A RESTful backend built with **Node.js**, **Express.js**, and **MongoDB** to manage student, course, and enrollment records.

## Features

- Add, update, delete students and courses
- Enroll students in courses
- View enrollment history
- Data validation using `express-validator`
- MongoDB with Mongoose ODM
- Environment configuration using `.env`

## Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB (with Mongoose)
- **Validation:** express-validator
- **Environment:** dotenv

##  Folder Structure


enrollBackend/
├── controllers/ # Logic for routes
├── models/ # Mongoose schemas
├── routes/ # Route definitions
├── validators/ # Request validations
├── db.js # MongoDB connection
├── server.js # Entry point
├── .env # Environment variables
└── .gitignore


##  Getting Started

### 1. Clone the Repository

git clone https://github.com/your-username/enrollment-backend.git
cd enrollment-backend


### 2. Install Dependencies
bash
Copy code
npm install

### 3. Set Up Environment Variables
Create a .env file in the root directory:

env
Copy code
PORT=8000
MONGO_URL=mongodb://localhost:27017/enrollmentDB

### 4. Run the Server

Copy code
npm run dev
The server will start at: http://localhost:8000

## API Endpoints

### Students
#### POST /api/students – Add new student

#### GET /api/students – Get all students

#### GET /api/students/:id – Get single student

#### PUT /api/students/:id – Update student

#### DELETE /api/students/:id – Delete student

### Courses
#### POST /api/courses – Add new course

#### GET /api/courses – Get all courses

#### GET /api/courses/:id – Get single course

#### PUT /api/courses/:id – Update course

#### DELETE /api/courses/:id – Delete course

### Enrollments
#### POST /api/enrollments – Enroll a student in a course

#### GET /api/enrollments – Get all enrollments

#### GET /api/enrollments/:id – Get specific enrollment

# Sample Data
Use Postman or a REST client to test API with sample JSON bodies.

# Notes
Timestamps are auto-generated for enrollments.

You can easily extend this to include attendance, grades, etc.

# Author
Preethu Pradeep – GitHub

# License
This project is licensed under the MIT License.


