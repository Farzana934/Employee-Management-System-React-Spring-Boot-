# 🚀 Employee Management System (React + Spring Boot)

A full-stack **Employee Management System** built using **React.js (Frontend)** and **Spring Boot (Backend)**. This application allows users to manage employee records with complete CRUD functionality.

---

## 📌 Features

* ➕ Add Employee
* 📋 View Employee List
* ✏️ Update Employee Details
* ❌ Delete Employee
* 🔄 REST API Integration
* 📱 Responsive UI

---

## 🛠️ Tech Stack

### 🔹 Frontend

* React.js
* Axios
* CSS

### 🔹 Backend

* Spring Boot
* Spring Data JPA
* REST APIs

### 🔹 Database

* MySQL

---

## 📂 Project Structure

### 🔹 Backend (Spring Boot)

```
employee/
└── employee/
    ├── src/main/java/com/EmpProject/employee/
    │   ├── controller/
    │   │   └── EmployeeController.java
    │   ├── entity/
    │   │   └── Employee.java
    │   ├── repository/
    │   │   └── EmployeeRepository.java
    │   ├── service/
    │   │   └── EmployeeService.java
    │   └── EmployeeApplication.java
    │
    ├── src/main/resources/
    │   └── application.properties
    │
    └── pom.xml
```

---

### 🔹 Frontend (React)

```
employeeweb/
├── src/
│   ├── pages/
│   │   ├── dashboard/
│   │   │   └── Dashboard.js
│   │   ├── employee/
│   │   │   ├── PostUser.js
│   │   │   ├── UpdateUser.js
│   │   │   ├── PostUser.css
│   │   │   └── UpdateUser.css
│   │   ├── header/
│   │   │   ├── Header.js
│   │   │   └── Header.css
│   │   └── noMatch/
│   │       └── NoMatch.js
│   │
│   ├── App.js
│   ├── index.js
│   └── App.css
│
├── package.json
└── README.md
```

---

## ⚙️ Setup Instructions

### 🔽 1. Clone Repository

```bash
git clone https://github.com/your-username/employee-management.git
cd employee-management
```

---

## ▶️ 2. Backend Setup (Spring Boot)

### 🔧 Configure Database

Edit `application.properties`:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/employee_db
spring.datasource.username=root
spring.datasource.password=your_password

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQLDialect
```

---

### ▶️ Run Backend

```bash
cd employee/employee
mvn spring-boot:run
```

Backend runs at:

```
http://localhost:8080
```

---

## 💻 3. Frontend Setup (React)

```bash
cd employeeweb
npm install
npm start
```

Frontend runs at:

```
http://localhost:3000
```

---

## 🔗 API Endpoints

| Method | Endpoint        | Description        |
| ------ | --------------- | ------------------ |
| GET    | /employees      | Get all employees  |
| GET    | /employees/{id} | Get employee by ID |
| POST   | /employees      | Create employee    |
| PUT    | /employees/{id} | Update employee    |
| DELETE | /employees/{id} | Delete employee    |

---

## 📦 Example JSON

```json
{
  "name": "employee1",
  "email": "employee1@gmail.com",
  "phone": "9998880001",
  "department": "HR"
}
```

---

## ⚠️ Important Notes

* Make sure MySQL is running before starting backend
* Update DB credentials in `application.properties`
* Backend must run before frontend
* Ensure CORS is enabled in Spring Boot

---

## 🚀 Future Enhancements

* 🔐 Login & Authentication (JWT)
* 🔍 Search Employees
* 📊 Dashboard Analytics
* 🌐 Deployment (AWS / Render)

---
## 🖼️ Screenshots

### 📊 Dashboard
![Dashboard](https://user-images.githubusercontent.com/xxxx/dashboard.png)

### ➕ Add Employee
![Add Employee](https://user-images.githubusercontent.com/xxxx/add.png)

### ✏️ Update Employee
![Update Employee](https://user-images.githubusercontent.com/xxxx/update.png)

⭐ If you like this project, give it a star on GitHub!
