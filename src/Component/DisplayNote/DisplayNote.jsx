import React from "react";

const DisplayNote = () => {
  let notes = [
    {
      id: 1,
      title: "Meeting with Team",
      date: "2025-03-10",
      message: "Discuss project updates and next sprint planning.",
    },
    {
      id: 2,
      title: "Grocery Shopping",
      date: "2025-03-11",
      message: "Buy milk, eggs, bread, and vegetables.",
    },
    {
      id: 3,
      title: "Workout Plan",
      date: "2025-03-12",
      message: "Morning run and strength training at the gym.",
    },
    {
      id: 4,
      title: "Book Reading",
      date: "2025-03-13",
      message: "Finish reading 'Atomic Habits' and take notes.",
    },
    {
      id: 5,
      title: "Doctor Appointment",
      date: "2025-03-14",
      message: "Visit Dr. Sharma for a routine health check-up.",
    },
  ];

  return (
    <div className="container mt-4">
      <h4 className="text-center mb-3">Saved Notes</h4>
      <div className="row">
        {notes.length === 0 ? (
          <p className="text-center">No notes available</p>
        ) : (
          notes.map((note, index) => (
            <div key={index} className="col-md-4 mb-3">
              <div className="card shadow-sm p-3">
                <h5>{note.title}</h5>
                <small className="text-muted">{note.date}</small>
                <p className="mt-2">{note.message}</p>
                <button className="btn btn-danger btn-sm">Delete</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default DisplayNote;
