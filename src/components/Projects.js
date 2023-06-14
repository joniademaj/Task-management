import React, { useState, useEffect } from "react";
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import DragandDrop from '../components/DragandDrop'
import Task from "./Task";

function Projects(props) {
  const [leaderProjects, setLeaderProjects] = useState([]);
  const [memberProjects, setMemberProjects] = useState([]);
  const [showContent, setShowContent] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Fetch projects data from the server
    fetch("http://localhost/php/task-management/app/controllers/projectController.php", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setLeaderProjects(data.leader_projects);
        setMemberProjects(data.member_projects);
      })

      .catch((error) => {
        console.error("Error fetching projects:", error);
      });
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  return (
    <div class="p-4 sm:ml-64">
        <div className="dashboard-content m-5 border-2 border-gray-300 p-5 rounded-md">
          <div className="title m-3">
            <h4>Project</h4>
          </div>
          {leaderProjects.map((project) => (
            <div className="border rounded-md shadow-md">
              <div className="flex items-center justify-between px-4 py-2">
                  <h2 className="text-lg font-medium">{project.name}</h2>
                  <button
                     onClick={toggleContent}
                     className="text-gray-600 focus:outline-none" >
                     {showContent ? <FaAngleUp /> : <FaAngleDown />}
                 </button>
             </div>
             {showContent && (
               <div className="p-4">
                 <div className="task">
                    <div className="container mx-auto my-8">
                        <h1 className="text-3xl font-bold mb-4">Task List</h1>
                         <DragandDrop />
                         <button onClick={handleOpenModal}>+ New Task</button>
                         <Task isOpen={isModalOpen} onClose={handleCloseModal} projectId={project.id}/>
                    </div>
                 </div>
               </div>
             )}
             </div>
            ))}
            </div>
        </div>
    );
}

export default Projects;