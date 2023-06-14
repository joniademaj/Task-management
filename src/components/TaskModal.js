import React, { useState } from "react";

function TaskModal(props) {
  const handleClose = () => {
    props.onClose();
  };

  return (
    <>
      {props.isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm"></div>
          <div className="bg-white p-10 rounded w-72 p-10 modal relative">
            <h1 className="font-semibold text-center text-xl text-gray-700">
              Edit Task
            </h1>

            <div className="flex flex-col mt-5">
              <input
                type="text"
                className="border border-gray-700 p-2 rounded mb-5"
                placeholder="Edit Task Name"
              />
              <input
                type="text"
                className="border border-gray-700 p-2 rounded mb-5"
                placeholder="Edit Task Priority"
              />
              <input
                type="date"
                className="border border-gray-700 p-2 rounded mb-5"
                placeholder="Date"
              />
            </div>
            <div className="text-center">
              <button className="px-5 py-2 bg-gray-700 text-white rounded">
                Edit
              </button>
              <button
              className="absolute top-0 right-0 m-2 text-gray-700 close-btn"
              onClick={handleClose}
            >
              x
            </button>
            </div>
            
          </div>
        </div>
      )}
    </>
  );
}


export default TaskModal;