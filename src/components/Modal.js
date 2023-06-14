import React, { useState } from "react";

function Modal(props) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {

    e.preventDefault();
    // Email validation

    // Name validation
    if (name.length < 5) {
      setErrorMessage('Name must be at least 5 characters long');
      return;
    }

    // Description validation
    if (description.length < 15) {
      setErrorMessage('Description must be at least 15 characters long');
      return;
    }

    // Start Date validation
    if (startDate.length == null) {
      setErrorMessage('Start date is required');
      return;
    }

    // Description validation
    if (endDate.length == null) {
      setErrorMessage('End date is required');
      return;
    }

    // Clear any previous error messages
    setErrorMessage('');

    const response = await fetch('http://localhost/php/task-management/app/controllers/projectController.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, description, startDate, endDate }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      alert('Successfully Inserted');
    } else {
      throw new Error('Error inserting data');
    }
  }
  const handleClose = () => {
    props.onClose();
  };

  return (
    <>
      {props.isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black bg-opacity-50"></div>
          <div className="bg-white p-10 rounded w-72 p-10 modal relative">
            <h1 className="font-semibold text-center text-xl text-gray-700">
              Create Projects
            </h1>

            <form className="flex flex-col mt-5" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border text-dark border-gray-700 p-2 rounded mb-5"
                placeholder="Add Project Name"
              />
              <input
                type="text"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="border border-gray-700 p-2 rounded mb-5"
                placeholder="Description"
              />
              <input
                type="date"
                name="start-date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="border border-gray-700 p-2 rounded mb-5"
                placeholder="Start Date"
              />
              <input
                type="date"
                name="end-date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="border border-gray-700 p-2 rounded mb-5"
                placeholder="End Date"
              />

              <div className="text-center">
                <button className="px-5 py-2 bg-gray-700 text-white rounded">
                  Add Project
                </button>
              </div>
            </form>
            
            <button
              className="absolute top-0 right-0 m-2 text-gray-700 close-btn"
              onClick={handleClose}
            >
              x
            </button>
          </div>
        </div>
      )}
    </>
  );
}


export default Modal;