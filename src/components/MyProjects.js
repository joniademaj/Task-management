import React, { useState, useEffect } from 'react';

function MyProjects() {
  const [projects, setProjects] = useState([]);
  const { user_id } = useParams();
  
  useEffect(() => {
    // Fetch projects created by the user ID
    const fetchProjects = async () => {
      try {
        const response = await fetch(`http://localhost/php/task-management/app/controllers/projectController.php?user_id=${user_id}`);
        if (response.ok) {
          const data = await response.json();
          setProjects(data);
        } else {
          throw new Error('Error fetching projects');
        }
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []); // Empty dependency array means the effect runs only once on mount

  return (
    <div>
      <h1>My Projects</h1>
      <ul>
        {projects.map(project => (
          <li key={project.id}>{project.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default MyProjects;