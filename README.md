# ini8-labs-assignment



# FOR BACKEND CODE:

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



# FOR FRONTEND CODE:

## Prerequisites

Before running the application, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 12 or higher)
- [npm](https://www.npmjs.com/) (version 6 or higher)

## Features

1. **Registration Form**: Users can register by providing their name, email, and date of birth.
2. **Registration List**: The application displays a list of all registered users.
3. **Registration Details**: Users can view the details of a specific registration by entering the registration ID.
4. **Registration Update**: Users can update the details of a specific registration by entering the registration ID and the new information.
5. **Registration Delete**: Users can delete a specific registration by entering the registration ID.
6. **Route List**: The application displays a list of all registered routes in the application.

## Technologies Used

- React.js
- Axios (for making HTTP requests)
- CSS (for styling)

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/FazilKlkt/ini8-frontend.git
```

1. Install the dependencies:

```bash
cd ini8-frontend
npm install
```

1. Start the development server:

```bash
npm run start
```

The application should now be running at `http://localhost:3000`.

## Usage

1. **Registration**: Fill out the registration form with your name, email, and date of birth, then click the "Register" button.
2. **Registration List**: The list of registered users will be displayed below the registration form.
3. **Registration Details**: Enter the registration ID in the input field and click the "Fetch Registration" button to view the details of a specific registration.
4. **Registration Update**: Enter the registration ID, name, email, and date of birth in the input fields, then click the "Update" button to update the registration.
5. **Registration Delete**: Enter the registration ID in the input field, then click the "Delete Registration" button to delete the registration.
6. **Route List**: The list of registered routes in the application will be displayed at the bottom of the page.
