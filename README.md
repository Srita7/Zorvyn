# Zorvyn Finance Dashboard Backend
Overview 
This project is a backend system for a finance dashboard that supports user role management, financial record tracking, and analytics.
#
Tech Stack
-Node.js
-Express.js
-MongoDB
-JWT Authentication
#
Features
User & Role Management
.Register/Login users
.Role-based access (Viewer, Analyst, Admin)
.User status control (Active/Inactive)
Financial Records
.Create, Read, Update, Delete records
.Fields: amount, type, category, date, note
.Filtering by:
  .Type (income/expense)
  .Category
  .Date range
# 
Dashboard APIs
.Total income & expenses
.Net balance
.Category-wise totals
.Monthly trends
.Recent transactions

Access Control
.Viewer → limited access
.Analyst → view records & analytics
.Admin → full control

Validation & Error Handling
.Input validation
.Proper HTTP status codes
.Error responses
#
How to Run
npm install
npm run dev
#
Environment Variables

Create a .env file:

PORT=5000
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret_key
#
API Endpoints
Auth
.POST /api/auth/register
.POST /api/auth/login
Records
.GET /api/records
.POST /api/records
.PUT /api/records/
.DELETE /api/records/
Dashboard
.GET /api/dashboard/summary
.GET /api/dashboard/category
.GET /api/dashboard/trends
.GET /api/dashboard/recent
Users (Admin)
.GET /api/users
.PATCH /api/users//role
.PATCH /api/users//status
#
Design Decisions
.Used MongoDB for flexible schema
.JWT for authentication
.Role-based middleware for access control
.Aggregation pipelines for analytics
#
Future Improvements
.Pagination
.Search functionality
.Frontend integration
.Unit testing
#
Author

Srita
