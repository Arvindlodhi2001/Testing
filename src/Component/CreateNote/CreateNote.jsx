import React, { useState } from "react";

const CreateNote = ({ addNote }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !date || !message) return alert("All fields are required!");

    addNote({ title, date, message });

    // Clear input fields
    setTitle("");
    setDate("");
    setMessage("");
  };

  return (
    <div className="container mt-4 w-50">
      <div className="card shadow p-4">
        <h4 className="text-center mb-3">Create Note</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter note title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Date</label>
            <input
              type="date"
              className="form-control"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea
              className="form-control"
              placeholder="Enter note message..."
              rows="3"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Save Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateNote;
