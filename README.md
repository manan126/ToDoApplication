# Todo App

This Todo app, crafted using Node.js, Express, and MongoDB, incorporates authentication features.

## Features

- User registration and login
- JWT based authentication System
- Full CRUD functionality for todo items
- Pagination for todo display
- Ability to pin/unpin todo items

## Installation

1. Repository Cloning   

   ```bash
   git clone https://github.com/yourusername/todo-app.git
   cd todo-app
   ```

2. Dependencies Installation

   ```bash
   npm install
   ```

3. Environment Configuration

   ```bash
   cp .env.example .env
   ```

4. Server Initialization
   ```bash
   npm start
   ```

## Server Routs

### User Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login a user

### Todo Management

- `POST /api/todos` - Create a new todo (requires authentication)
- `GET /api/todos` - Get all todos (requires authentication)
- `GET /api/todos/:id` - Get a todo by ID (requires authentication)
- `PUT /api/todos/:id` - Update a todo by ID (requires authentication)
- `DELETE /api/todos/:id` - Delete a todo by ID (requires authentication)

## Postman Collection

You can import the Postman collection from the following link:

[Postman Collection](https://techforensics.postman.co/workspace/Team-Workspace~5f8f7946-49eb-472c-8392-80b4924d6cf1/collection/34118583-fe522a5a-ab48-4cae-b4dd-971e3b4f987f?action=share&creator=34118583)
