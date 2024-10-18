# Ini8 Labs Assignment

This is a simple registration API built using Node.js, Express.js, and SQLite3 for Ini8 Labs Assignment

## Features

- Create a new registration
- Retrieve a list of all registered users
- Retrieve a specific registration by ID
- Update an existing registration
- Delete a registration
- Retrieve all routes of backend

## Prerequisites

- Node.js (version 12 or higher)
- SQLite3

## Installation

1. Clone the repository:

```bash
git clone https://github.com/FazilKlkt/ini8-assignment.git
```

1. Navigate to the project directory:

```

Code
cd ini8-assignment
```

1. Install the dependencies:

```bash
npm install
```

## Usage

1. Start the server:

```bash
npm  run start
```

The server will start running on `http://localhost:3000`.

1. Use a tool like Postman or cURL to interact with the API.

### Endpoints

- `POST /registrations`: Create a new registration
- `GET /registrations`: Retrieve a list of all registered users
- `GET /registrations/:id`: Retrieve a specific registration by ID
- `PUT /registrations/:id`: Update an existing registration
- `DELETE /registrations/:id`: Delete a registration
- `GET /routes`: Delete a registration

### Example Requests

**Create a new registration**

```
POST /registrations

{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "date_of_birth": "1990-01-01"
}
```

**Retrieve a list of all registered users**

```
GET /registrations
```

**Retrieve a specific registration by ID**

```
GET /registrations/1
```

**Update an existing registration**

```
PUT /registrations/1

{
  "name": "Jane Doe",
  "email": "jane.doe@example.com",
  "date_of_birth": "1991-02-02"
}
```

**Delete a registration**

```
DELETE /registrations/1
```

## Error Handling

The API returns appropriate HTTP status codes and error messages when an error occurs during the database operations.
