import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { FiUser, FiCalendar, FiFlag } from 'react-icons/fi';

const TaskRow = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`flex justify-between items-center p-4 rounded-lg mb-4 ${
            snapshot.isDragging ? 'bg-gray-200' : 'bg-white'
          }`}
        >
          <div className="flex items-center">
            <img
              src={task.assigneeAvatar}
              alt={`${task.assigneeName}'s avatar`}
              className="w-8 h-8 rounded-full mr-4"
            />
            <div className="flex flex-col">
              <span className="text-lg font-medium">{task.title}</span>
              <span className="text-sm text-gray-500">{task.description}</span>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex items-center mr-4">
              <FiUser className="text-gray-500 mr-2" />
              <span className="text-sm text-gray-500">{task.assigneeName}</span>
              <button className="ml-2 rounded-full bg-blue-500 text-white w-6 h-6 flex justify-center items-center">
                <FiPlus />
              </button>
            </div>
            <div className="flex items-center mr-4">
              <FiCalendar className="text-gray-500 mr-2" />
              <span className="text-sm text-gray-500">{task.dueDate}</span>
            </div>
            <div className="flex items-center">
              <FiFlag className="text-gray-500 mr-2" />
              <span className="text-sm text-gray-500">{task.priority}</span>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default TaskRow;