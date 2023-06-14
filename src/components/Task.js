import React, { useState, useEffect } from "react";
import Projects from "./Projects";
import DragandDrop from "./DragandDrop";
import Card from "./Card";

function Task(props) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const projectId = props.projectId;
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch(
          `http://localhost/php/task-management/app/controllers/taskController.php?project_id=${projectId}`
        );
        const data = await response.json();

        setTasks(data);
        // console.log(data);
      } catch (error) {
        console.log('Error retrieving tasks:', error);
      }
    };

    fetchTasks();
  }, [projectId]);

  const taskId = tasks.task_id;
  const taskTitle = tasks.title;
  const taskDueDate = tasks.due_date;
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Email validation
    
    // Clear any previous error messages
    setErrorMessage('');

    const response = await fetch('http://localhost/php/task-management/app/controllers/taskController.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ projectId, title, description, dueDate }),
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
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-10 rounded w-72 p-10 modal absolute">
            <h1 className="font-semibold text-center text-xl text-gray-700">
              Create Task
            </h1>

            {console.log("Tasks" + tasks)}

            <form className="flex flex-col mt-5" onSubmit={handleSubmit}>
              <input
                type="text"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border text-dark border-gray-700 p-2 rounded mb-5"
                placeholder="Add Project Name"
              />
              <textarea
                type="date"
                name="description"
                value={description}
                rows="5"
                onChange={(e) => setDescription(e.target.value)}
                className="border border-gray-700 p-2 rounded mb-5"
                placeholder="Start Date"
              />
              <input
                type="date"
                name="dueDate"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="border border-gray-700 p-2 rounded mb-5"
                placeholder="End Date"
              />

              <div className="text-center">
                <button className="px-5 py-2 bg-gray-700 text-white rounded">
                  Add Task
                </button>
              </div>
            </form>



            <button className="absolute top-0 right-0 m-2 close-btn" onClick={handleClose}>
              x
            </button>


          </div>


        </div>

      )}

      <DragandDrop taskId={taskId} taskTitle={taskTitle} taskDueDate={taskDueDate}/>

    </>
  );
}

export default Task