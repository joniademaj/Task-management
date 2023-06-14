import React, { useState, useEffect } from "react";
import Card from "./Card"; 

const DragandDrop = (props) => {

  console.log(props.taskId);

  const [cards, setCards] = useState([
    { id: 1, text: "Task 1" },
    { id: 2, text: "Task 2" },
    { id: 3, text: "Task 3" },
  ]);

  console.log(props);
  // const [tasks, setTasks] = useState([]);

    // const [cards, setCards] = useState({tasks});
    // console.log(tasks);
    // setTasks(props);
    const handleDragStart = (e, id) => {
      e.dataTransfer.setData("cardId", id);
    };
  
    const handleDrop = (e, index) => {
      const cardId = e.dataTransfer.getData("cardId");
      const cardIndex = tasks.findIndex((task) => task.task_id === Number(cardId));
      const newTasks = [...tasks];
      newTasks.splice(cardIndex, 1);
      newTasks.splice(index, 0, tasks[cardIndex]);
      setTasks(newTasks);
    };
  
    const handleDragOver = (e) => {
      e.preventDefault();
    };
  
    // return (
    //   <div>
    //     {tasks && tasks.map((task, index) => (
    //       <div
    //         key={task.task_id}
    //         onDrop={(e) => handleDrop(e, index)}
    //         onDragOver={(e) => handleDragOver(e)}
    //       >
    //         <Card
    //           text={task.title}
    //           id={task.task_id}
    //           draggable={true}
    //           onDragStart={(e) => handleDragStart(e, task.task_id)}
    //         />
    //       </div>
    //     ))}
    //   </div>
    // );
  };
  
  export default DragandDrop;