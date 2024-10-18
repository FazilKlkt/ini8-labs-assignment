import React, { useState, useEffect } from "react";
import axios from "./axiosConfig";
import "./App.css";

const RegistrationForm = ({ onRegister }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/registrations", {
        name,
        email,
        date_of_birth: dateOfBirth,
      });
      setName("");
      setEmail("");
      setDateOfBirth("");
      // Trigger a re-fetch of registrations after successful submission
      onRegister();
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Date of Birth:
        <input
          type="date"
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
        />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};

const RegistrationList = ({ registrations }) => {
  return (
    <div>
      <h2>Registered Users</h2>
      {Array.isArray(registrations) && registrations.length > 0 ? (
        <ul>
          {registrations.map((registration) => (
            <li key={registration.id}>
              <strong>ID:</strong> {registration.id} <br />
              <strong>Name:</strong> {registration.name} <br />
              <strong>Email:</strong> {registration.email} <br />
              <strong>Date of Birth:</strong> {registration.date_of_birth}
            </li>
          ))}
        </ul>
      ) : (
        <p>No registrations found.</p>
      )}
    </div>
  );
};

const RegistrationDetails = () => {
  const [registration, setRegistration] = useState(null);
  const [id, setId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`/registrations/${id}`);
      setRegistration(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  if (!registration) {
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Registration ID:
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </label>
        <button type="submit">Fetch Registration</button>
      </form>
    );
  }

  return (
    <div>
      <h2>Registration Details</h2>
      <p>Name: {registration.name}</p>
      <p>Email: {registration.email}</p>
      <p>Date of Birth: {registration.date_of_birth}</p>
      <p>Created At: {registration.created_at}</p>
    </div>
  );
};

const RegistrationUpdate = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/registrations/${id}`, {
        name,
        email,
        date_of_birth: dateOfBirth,
      });
      setId("");
      setName("");
      setEmail("");
      setDateOfBirth("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Update Registration</h2>
      <form onSubmit={handleSubmit}>
        <label>
          ID:
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </label>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Date of Birth:
          <input
            type="date"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
          />
        </label>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

const RegistrationDelete = () => {
  const [id, setId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.delete(`/registrations/${id}`);
      setId("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Registration ID:
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      </label>
      <button type="submit">Delete Registration</button>
    </form>
  );
};

const RouteList = () => {
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    const fetchRoutes = async () => {
      try {
        const response = await axios.get("/routes");
        setRoutes(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchRoutes();
  }, []);

  return (
    <div>
      <h2>Registered Routes</h2>
      {Array.isArray(routes) && routes.length > 0 ? (
        <ul>
          {routes.map((route, index) => (
            <li key={index}>
              {route.method} {route.path} - {route.description}
            </li>
          ))}
        </ul>
      ) : (
        <p>No routes found.</p>
      )}
    </div>
  );
};

const App = () => {
  const [registrations, setRegistrations] = useState([]);

  const fetchRegistrations = async () => {
    try {
      const response = await axios.get("/registrations");
      setRegistrations(response.data);
    } catch (error) {
      console.error("Error fetching registrations:", error);
    }
  };

  useEffect(() => {
    fetchRegistrations();
  }, []);

  return (
    <div>
      <h1>Registration App</h1>
      <RegistrationForm onRegister={fetchRegistrations} />
      <RegistrationList registrations={registrations} />
      <RegistrationDetails />
      <RegistrationUpdate />
      <RegistrationDelete />
      <RouteList />
    </div>
  );
};

export default App;
