// import React from 'react';

// const Modal = ({ isOpen, onClose, onSubmit, children }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="modal fixed inset-0 z-50 flex items-center justify-center">
//       <div className="modal-overlay absolute inset-0 bg-gray-900 opacity-50" onClick={onClose} />
//       <div className="modal-content bg-white shadow-md rounded-lg">
//         <div className="modal-header flex justify-between p-4 border-b">
//           <h3 className="font-bold">Add New Project</h3>
//           <button className="modal-close" onClick={onClose}>
//             <span>&times;</span>
//           </button>
//         </div>
//         <div className="modal-body p-4">
//           <form onSubmit={onSubmit}>
//             {children}
//             <div className="mt-4 flex justify-end">
//               <button className="btn btn-primary" type="submit">Save</button>
//               <button className="btn btn-secondary ml-2" type="button" onClick={onClose}>Cancel</button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Modal;
import React, { useState } from "react";

function Modal(props) {
  const handleClose = () => {
    props.onClose();
  };

  return (
    <>
      {props.isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-white p-10 rounded w-72 p-10 modal">
            <h1 className="font-semibold text-center text-xl text-gray-700">
              Create Projects
            </h1>

            <div className="flex flex-col mt-5">
              <input
                type="text"
                className="border border-gray-700 p-2 rounded mb-5"
                placeholder="Add Project Name"
              />
              <input
                type="number"
                className="border border-gray-700 p-2 rounded mb-5"
                placeholder="Size of team"
              />
              <input
                type="text"
                className="border border-gray-700 p-2 rounded mb-5"
                placeholder="Add team members emails"
              />
              <input
                type="date"
                className="border border-gray-700 p-2 rounded mb-5"
                placeholder="Date"
              />
            </div>
            <div className="text-center">
              <button className="px-5 py-2 bg-gray-700 text-white rounded">
                Add Project
              </button>
            </div>
            <button className="absolute top-0 right-0 m-2 close-btn" onClick={handleClose}>
              x
            </button>
          </div>
        </div>
      )}
    </>
  );
}


export default Modal;