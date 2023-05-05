// import React, { useState } from 'react';
// import { DragDropContext, Droppable } from 'react-beautiful-dnd';
// import TaskRow from './TaskRow';

// const TaskList = ({ tasks, setTasks }) => {
//   const [draggingTask, setDraggingTask] = useState(null);

//   const handleDragStart = (result) => {
//     const { draggableId } = result;
//     const task = tasks.find((task) => task.id === draggableId);
//     setDraggingTask(task);
//   };

//   const handleDragEnd = (result) => {
//     setDraggingTask(null);

//     const { destination, source } = result;

//     // If dropped outside of the droppable area
//     if (!destination) {
//       return;
//     }

//     // If dropped in the same position
//     if (destination.droppableId === source.droppableId && destination.index === source.index) {
//       return;
//     }

//     // Reorder the tasks array
//     const newTasks = [...tasks];
//     newTasks.splice(source.index, 1);
//     newTasks.splice(destination.index, 0, draggingTask);
//     setTasks(newTasks);
//   };

//   return (
//     <DragDropContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
//       <Droppable droppableId="taskList">
//         {(provided, snapshot) => (
//           <div
//             ref={provided.innerRef}
//             {...provided.droppableProps}
//             className={`bg-gray-100 p-4 rounded-lg ${
//               snapshot.isDraggingOver ? 'shadow-lg' : ''
//             }`}
//           >
//             {tasks.map((task, index) => (
//               <TaskRow key={task.id} task={task} index={index} />
//             ))}
//             {provided.placeholder}
//           </div>
//         )}
//       </Droppable>
//     </DragDropContext>
//   );
// };

// export default TaskList;
import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const TaskList = () => {
  const [tasks, setTasks] = useState([
    {
      id: 'task-1',
      title: 'Task 1',
      user: 'John Doe',
      date: '2022-05-01',
      priority: 'High',
    },
    {
      id: 'task-2',
      title: 'Task 2',
      user: 'Jane Smith',
      date: '2022-05-02',
      priority: 'Medium',
    },
    {
      id: 'task-3',
      title: 'Task 3',
      user: 'Bob Johnson',
      date: '2022-05-03',
      priority: 'Low',
    },
  ]);

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(tasks);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setTasks(items);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="tasks">
        {(provided) => (
          <ul {...provided.droppableProps} ref={provided.innerRef}>
            {tasks.map((task, index) => (
              <Draggable key={task.id} draggableId={task.id} index={index}>
                {(provided) => (
                  <li
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    className="bg-white rounded-lg shadow-lg p-4 flex items-center space-x-4"
                  >
                    <div className="flex-grow">
                      <h2 className="text-lg font-semibold">{task.title}</h2>
                      <p className="text-gray-500">
                        <i className="far fa-user mr-2"></i>
                        {task.user}
                      </p>
                    </div>
                    <div className="flex-none flex items-center space-x-2">
                      <i className="far fa-calendar mr-1"></i>
                      <p>{task.date}</p>
                    </div>
                    <div className="flex-none flex items-center space-x-2">
                      <i className="far fa-flag mr-1"></i>
                      <p>{task.priority}</p>
                    </div>
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TaskList;