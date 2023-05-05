import React, { useState } from 'react';
import Modal from './Modal';

const Button = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    setIsOpen(false);
  };

  const handleInputClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={() => setIsOpen(true)}>Add Project</button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} onSubmit={handleSubmit}>
      <button onClick={() => setIsOpen(false)}>X</button>
      
      </Modal>

    </div>
  );
};

export default Button;