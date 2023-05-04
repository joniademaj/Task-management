import React, { useState } from "react";
import { FiUser, FiCalendar, FiFlag } from 'react-icons/fi';

const Card = ({ text, id, draggable, onDragStart }) => {

  const [isDragging, setIsDragging] = useState(false);
  const [showModal, setShowModal] = useState(false);

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

      {showModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "5px",
              maxWidth: "90%",
              maxHeight: "90%",
              overflow: "auto",
            }}
          >
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button onClick={() => handleCloseModal()}>Close</button>
            </div>
            <h2>{text}</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              consectetur leo non mauris posuere semper. Nunc euismod erat id
              lectus finibus, quis bibendum lorem sagittis. Integer eget
              facilisis est, in vestibulum mi. Proin porttitor ultricies justo,
              sit amet fermentum velit tempus ut. Morbi ut erat eros. Vivamus
              maximus erat a ex ullamcorper, vel pulvinar tellus venenatis. Sed
              vel venenatis velit.
            </p>
          </div>
        </div>
      )}
    </div>
    );
  };

  export default Card;