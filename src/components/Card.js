import React, { useState } from "react";
import { FiUser, FiCalendar, FiFlag, FiEdit, FiTrash } from 'react-icons/fi';
import TaskModal from "./TaskModal";
const Card = ({ text, id, draggable, onDragStart }) => {

  const [isDragging, setIsDragging] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);

  const handleDragStart = (e, id) => {
    setIsDragging(true);
    e.dataTransfer.setData("cardId", id);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handleCardClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    console.log("Closed");
    setShowModal(false);
  };

  const handleTaskModalOpen = () => {
    setIsTaskModalOpen(true);
  };

  const handleTaskModalClose = () => {
    setIsTaskModalOpen(false);
  };
    return (
    //   <div
    //     id={id}
    //     draggable={draggable}
    //     onDragStart={onDragStart}
    //     style={{ backgroundColor: "white", padding: "10px", margin: "10px" }}
    //   >
    //     {text}
    //   </div>
    <div
      id={id}
      draggable={draggable}
      onDragStart={(e) => handleDragStart(e, id)}
      onDragEnd={handleDragEnd}
      onClick={handleCardClick}
      style={{
        backgroundColor: "white",
        padding: "10px",
        margin: "10px",
        border: isDragging ? "2px dashed gray" : "2px solid transparent",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          opacity: isDragging ? "0.5" : "1",
        }}
      >
        <span>{text}</span>
        <div style={{display: "flex"}}>
          <div style={{margin: "0px 25px"}}>
            <FiUser />
          </div>
          <div style={{margin: "0px 25px"}}>
            <FiCalendar />
          </div>
          <div style={{margin: "0px 25px"}}> 
            <FiFlag />
          </div>
          <div style={{margin: "0px 25px"}}> 
            <div>
              <button onClick={handleTaskModalOpen}><FiEdit /></button>
              <TaskModal isOpen={isTaskModalOpen} onClose={handleTaskModalClose} />
            </div>
          </div>
          <div style={{margin: "0px 25px"}}> 
            <FiTrash />
          </div>
        </div>
        
        {draggable && (
          <span
            style={{ cursor: "grab", fontSize: "1.2rem" }}
            role="img"
            aria-label="drag-icon"
          >
            &#8942;&#8942;&#8942;
          </span>
        )}

        
      </div>
    </div>
    );
  };

  export default Card;