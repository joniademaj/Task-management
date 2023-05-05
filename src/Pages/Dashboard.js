import React, { useState } from 'react'
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

// import HamburgerButton from './HamburgerMenuButton/HamburgerButton'

const Dashboard = () => {
  const [open, setOpen] = useState(true)
  const [mobileMenu, setMobileMenu] = useState(false)
  const location = useLocation()
  const [showContent, setShowContent] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [activeTab, setActiveTab] = useState(0); // Track the active tab

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

  const Menus = [
    { title: 'Tasks', path: '/tasks', src: <AiOutlineHome /> },
    { title: 'Notifications', path: '/course', src: <AiOutlineBell /> },
    { title: 'Goals', path: '/profile', src: <CgProfile /> },
    { title: 'Signin', path: '/login', src: <SiOpenaccess />, gap: 'true' },
  ]

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

  return (
    <div className="dashboard flex">
        <div>
          <div
          className={`${
            open ? 'w-60' : 'w-fit'
          } hidden sm:block relative h-screen dashboard-sidebar duration-300 bg-gray-100 border-r border-gray-200 dark:border-gray-600 p-5 dark:bg-slate-800`}
          >
          <BsArrowLeftCircle
            className={`${
              !open && 'rotate-180'
            } absolute text-3xl bg-white fill-slate-800  rounded-full cursor-pointer top-9 -right-4 dark:fill-gray-400 dark:bg-gray-800`}
            onClick={() => setOpen(!open)}
          />
          <Link to='/'>
            <div className={`flex ${open && 'gap-x-4'} items-center`}>
              {/* <img src={Logo} alt='' className='pl-2' /> */}
              {open && (
                <span className='text-xl font-medium whitespace-nowrap dark:text-white'>
                  Dashboard
                </span>
              )}
            </div>
          </Link>

          <ul className='pt-6'>
            {Menus.map((menu, index) => (
              <Link to={menu.path} key={index}>
                <li
                  className={`flex items-center gap-x-6 p-3 text-base font-normal rounded-lg cursor-pointer dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700
                          ${menu.gap ? 'mt-9' : 'mt-2'} ${
                    location.pathname === menu.path &&
                    'bg-gray-200 dark:bg-gray-700'
                  }`}
                >
                  <span className='text-2xl'>{menu.src}</span>
                  <span
                    className={`${
                      !open && 'hidden'
                    } origin-left duration-300 hover:block`}
                  >
                    {menu.title}
                    
                  </span>
                </li>
              </Link>
            ))}
          </ul>
          <div className="profile" style={{background: "white", fontSize: "50px", display: "flex", justifyContent: "center", position: "absolute", bottom: "0", borderRadius: "10px", padding: "10px"}}>
              <CgProfile />
          </div>
        </div>
        {/* Mobile Menu */}
        <div className="pt-3">
          {/* <HamburgerButton
            setMobileMenu={setMobileMenu}
            mobileMenu={mobileMenu}
          /> */}
        </div>
        <div className="sm:hidden">
          <div
            className={`${
              mobileMenu ? 'flex' : 'hidden'
            } absolute z-50 flex-col items-center self-end py-8 mt-16 space-y-6 font-bold sm:w-auto left-6 right-6 dark:text-white  bg-gray-50 dark:bg-slate-800 drop-shadow md rounded-xl`}
          >
            {Menus.map((menu, index) => (
              <Link
                to={menu.path}
                key={index}
                onClick={() => setMobileMenu(false)}
              >
                <span
                  className={` ${
                    location.pathname === menu.path &&
                    'bg-gray-200 dark:bg-gray-700'
                  } p-2 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700`}
                >
                </span>
              </Link>
            ))}
          </div>
        </div>
        </div>

        <div className="w-screen flex flex-col">
            <div className="dashboard-header flex items-center justify-center bg-gray-100 border-r border-gray w-100">
                <div className="search">
                    <form onSubmit={handleSubmit} className="flex items-center justify-center">
                      <div className="relative">
                        <input
                          type="text"
                          value={query}
                          onChange={handleChange}
                          placeholder="Search tasks"
                          className="border-2 border-gray-300 rounded-md px-4 py-2 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <button
                          type="submit"
                          className="absolute inset-y-0 right-0 px-3 py-2 text-gray-400 hover:text-gray-500 focus:outline-none"
                        >
                          <FaSearch />
                        </button>
                      </div>
                    </form>
                </div>
            </div>
        <div>
        <div className="dashboard-content m-5 border-2 border-gray-300 p-5 rounded-md">
                <div className="title m-3">
                    <h4>Projects</h4>
                </div>
                <div className="border rounded-md shadow-md">
                    <div className="flex items-center justify-between px-4 py-2">
                        <h2 className="text-lg font-medium">Project 1</h2>
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
                         </div>
                        </div>
                      </div>
                    )}
                    </div>
                </div>
            </div>

            <div className="dashboard-content m-5 border-2 border-gray-300 p-5 rounded-md">
                <div className="title m-3">
                    <h4>Projects</h4>
                </div>
                <div className="border rounded-md shadow-md">
                    <div className="flex items-center justify-between px-4 py-2">
                        <h2 className="text-lg font-medium">Project 1</h2>
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
                         </div>
                        </div>
                      </div>
                    )}
                    </div>
                </div>

              <div className="add-task">
                <div className="add-btn">
                  <button onClick={handleOpenModal}>+ Add Task</button>
                  <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
                </div>
              </div>
        </div>
    </div>
  )
}

export default Dashboard;