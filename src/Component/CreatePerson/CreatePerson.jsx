// export default CreatePerson

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const initialData = [
  {
    name: "name 1",
    email: "email 1",
    age: "age 1",
    gender: "gender 1",
    mobile: "mobile 1",
    id: "1",
  },
  {
    name: "name 2",
    email: "email 2",
    age: "age 2",
    gender: "gender 2",
    mobile: "mobile 2",
    id: "2",
  },
  {
    name: "name 3",
    email: "email 3",
    age: "age 3",
    gender: "gender 3",
    mobile: "mobile 3",
    id: "3",
  },
  {
    name: "name 4",
    email: "email 4",
    age: "age 4",
    gender: "gender 4",
    mobile: "mobile 4",
    id: "4",
  },
  {
    name: "name 5",
    email: "email 5",
    age: "age 5",
    gender: "gender 5",
    mobile: "mobile 5",
    id: "5",
  },
];

const CreatePerson = () => {
  const [users, setUsers] = useState(initialData);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
    mobile: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers([...users, { ...formData, id: users.length + 1 }]);
    setFormData({ name: "", email: "", age: "", gender: "", mobile: "" });

    console.log("formData-->", formData);
  };

  return (
    <div className="container mt-4 w-50">
      <h3 className="text-center">User Form</h3>
      <form
        onSubmit={handleSubmit}
        className="mb-4 p-3 shadow rounded bg-light"
      >
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="number"
            className="form-control"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Gender</label>
          <select
            className="form-select"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Mobile</label>
          <input
            type="text"
            className="form-control"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Add User
        </button>
      </form>
    </div>
  );
};

export default CreatePerson;
