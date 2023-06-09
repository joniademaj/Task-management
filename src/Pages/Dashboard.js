import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { BsArrowLeftCircle } from 'react-icons/bs'
import { AiOutlineHome } from 'react-icons/ai'
import { SiFuturelearn } from 'react-icons/si'
import { SiOpenaccess } from 'react-icons/si'
import { CgProfile } from 'react-icons/cg'
import { AiOutlineBell } from "react-icons/ai";
import { FaSearch } from 'react-icons/fa';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import TaskRow from '../components/TaskRow';
import tasks from '../tasks';
import TaskList from '../components/TaskList'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import DragandDrop from '../components/DragandDrop'
import Button from '../components/Button'
import Modal from '../components/Modal'
import TaskModal from '../components/TaskModal'
import { useParams } from 'react-router-dom';
import SideBar from '../components/SideBar'
import Projects from '../components/Projects'
import logo from "../../public/logo.png"
import Users from '../components/Users'

// import HamburgerButton from './HamburgerMenuButton/HamburgerButton'

const Dashboard = () => {
  const [open, setOpen] = useState(true)
  const [mobileMenu, setMobileMenu] = useState(false)
  const location = useLocation()
  const [showContent, setShowContent] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user_id } = useParams();
  const [userData, setUserData] = useState(null);
  const [activeTab, setActiveTab] = useState(0); // Track the active tab

  console.log("User ID" + user_id);

  useEffect(() => {
    // Fetch users data from the server
    fetch(`http://localhost/php/task-management/app/controllers/userController.php?user_id=${user_id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
        // console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, [user_id]);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex); // Update the active tab when a tab is clicked
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const [rows, setRows] = useState([
    {
      id: '1',
      title: 'Row 1',
      userIcon: '/user-icon.svg',
      calendarIcon: '/calendar-icon.svg',
      flagIcon: '/flag-icon.svg',
    },
    {
      id: '2',
      title: 'Row 2',
      userIcon: '/user-icon.svg',
      calendarIcon: '/calendar-icon.svg',
      flagIcon: '/flag-icon.svg',
    },
    // add more rows as needed
  ]);

  function handleModal(){
    setIsOpenModal(!isOpenModal);
  }

  function handleDragEnd(result) {
    if (!result.destination) return;
  
    const items = Array.from(rows);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
  
    setRows(items);
  }

  const [taskList, setTaskList] = useState(tasks);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const toggleContent = () => {
    setShowContent(!showContent);
  };
  
  return(
    <div>
      {/* {!isModalOpen && (
        <SideBar />
      )}
      <div> */}
      <div>
        <nav class="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div class="px-3 py-3 lg:px-5 lg:pl-3">
          <div class="flex items-center justify-between">
            <div class="flex items-center justify-start">
              <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                  <span class="sr-only">Open sidebar</span>
                  <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                     <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                  </svg>
               </button>
              <a href="#" class="flex ml-2 md:mr-24">
                <img src={logo} class="h-8 mr-3" />
              </a>
            </div>
            <div class="flex items-center">
                <div class="flex items-center ml-3">
                  <div>
                    <button type="button" class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                      <span class="sr-only">Open user menu</span>
                      <img class="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo" />
                    </button>
                  </div>
                  <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown-user">
                    <div class="px-4 py-3" role="none">
                      <p class="text-sm text-gray-900 dark:text-white" role="none">
                        
                      </p>
                      <p class="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                        
                      </p>
                    </div>
                    <ul class="py-1" role="none">
                      <li>
                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Dashboard</a>
                      </li>
                      <li>
                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Settings</a>
                      </li>
                      <li>
                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Earnings</a>
                      </li>
                      <li>
                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Sign out</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </nav>

      <aside id="logo-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
         <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
            <ul class="space-y-2 font-medium">
               <li>
                  <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                     <svg aria-hidden="true" class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                     <span class="ml-3"  className={activeTab === 0 ? 'active' : ''} onClick={() => handleTabClick(0)}>Dashboard</span>
                  </a>
               </li>
               {userData != null && userData.role == "Admin" ? 
               <li>
                  <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                     <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                     <span class="flex-1 ml-3 whitespace-nowrap" className={activeTab === 1 ? 'active' : ''} onClick={() => handleTabClick(1)}> Users</span>
                  </a>
               </li>
               : ""}
               <li>
                  <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                     <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path></svg>
                     <span class="flex-1 ml-3 whitespace-nowrap">Sign In</span>
                  </a>
               </li>
               {/* {userData != null && userData.role == "User" ?  */}
               <li>
                  <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                    <span class="flex-1 ml-3 whitespace-nowrap" className={activeTab === 3 ? 'active' : ''} onClick={() => handleTabClick(3)}>My Projects </span>
                  </a>
               </li>
               {/* : ""} */}
            </ul>
         </div>
      </aside>


      <div>
        <div className={`tab-item ${activeTab === 1 ? 'active' : ''}`}>
            <div className="tab-content">
                <div>
                    <h1 className="text-center">Users</h1>
                    <Users />
                </div>
            </div>
        </div>

        <div className={`tab-item ${activeTab === 0 ? 'active' : ''}`}>
          <Projects />
              
          <div className="add-task">
              <div className="add-btn">
                <button onClick={handleOpenModal}>+ New Project</button>
                <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
              </div>
          </div>
          </div>
        </div>

        <div className={`tab-item ${activeTab === 3 ? 'active' : ''}`}>
            <div className="tab-content">
                <div>
                    <h1 className="text-center">Projects</h1>
                    <Projects />
                </div>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Dashboard;