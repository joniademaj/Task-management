import React, { useState } from "react";
import Card from "./Card"; 

const DragandDrop = () => {
    const [cards, setCards] = useState([
      { id: 1, text: "Task 1" },
      { id: 2, text: "Task 2" },
      { id: 3, text: "Task 3" },
    ]);
  
    const handleDragStart = (e, id) => {
      e.dataTransfer.setData("cardId", id);
    };
  
    const handleDrop = (e, index) => {
      const cardId = e.dataTransfer.getData("cardId");
      const cardIndex = cards.findIndex((card) => card.id === Number(cardId));
      const newCards = [...cards];
      newCards.splice(cardIndex, 1);
      newCards.splice(index, 0, cards[cardIndex]);
      setCards(newCards);
    };
  
    const handleDragOver = (e) => {
      e.preventDefault();
    };
  
    return (
      <div>
        {cards.map((card, index) => (
          <div
            key={card.id}
            onDrop={(e) => handleDrop(e, index)}
            onDragOver={(e) => handleDragOver(e)}
          >
            <Card
              text={card.text}
              id={card.id}
              draggable={true}
              onDragStart={(e) => handleDragStart(e, card.id)}
            />

          </div>

        ))}
            <p>+ New task</p>

      </div>
    );
  };
  
  export default DragandDrop;