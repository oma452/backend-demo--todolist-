# Todo List Backend API

A simple Node.js backend for managing a to-do list using Express.js and MongoDB with Mongoose.

This project provides a REST API that allows you to create, list, update, and delete tasks. It is intended as a lightweight backend demo for a to-do application.

## Features

- Create a new task
- View all tasks
- Update an existing task
- Delete a task
- MongoDB persistence
- Express.js API server

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose

## Project Structure

```text
.
├── app.js
├── models
│   └── task.js
├── routes
│   └── taskRoutes.js
├── package.json
├── package-lock.json
└── node_modules/
```

## Installation

1. Clone the repository.
2. Install dependencies:

```bash
npm install
```

3. Make sure MongoDB is running locally on:

```text
mongodb://localhost:27017/test
```

4. Start the server:

```bash
npm start
```

The application will run on port 3000.

## API Endpoints

### GET /
Returns all tasks.

### POST /
Creates a new task.

Request body example:

```json
{
  "title": "Learn Node.js",
  "description": "Complete the backend demo project",
  "completed": false
}
```

### PUT /:id
Updates a task by ID.

Example request body:

```json
{
  "title": "Finish API project",
  "completed": true
}
```

### DELETE /:id
Deletes a task by ID.

## Example Usage

Create a task:

```bash
curl -X POST http://localhost:3000/ \
  -H "Content-Type: application/json" \
  -d '{"title":"Buy groceries","description":"Milk, eggs, bread","completed":false}'
```

Get all tasks:

```bash
curl http://localhost:3000/
```

Update a task:

```bash
curl -X PUT http://localhost:3000/64d9f9d9c5a0f123456789ab \
  -H "Content-Type: application/json" \
  -d '{"completed":true}'
```

Delete a task:

```bash
curl -X DELETE http://localhost:3000/64d9f9d9c5a0f123456789ab
```

## Notes

- This is a backend-only demo project.
- It does not include a frontend interface.
- The database name used in this project is `test`.

## License

This project is licensed under the ISC license.
