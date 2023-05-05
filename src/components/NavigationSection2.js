import React from 'react'
import { useState } from 'react';
import '../NavigationSection.css';
function NavigationSection2() {

    const [activeTab, setActiveTab] = useState(0); // Track the active tab  
    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex); // Update the active tab when a tab is clicked
    };

  return (
    <div className="main">
            <div className="content">
                <div className="header">
                    <p className="built-p">Built for everyone</p>
                    <h1 className="built-h">Built for teams from 1 to 1,000+.</h1>
                </div>
                <div className="navbar">
                    <nav className="navigation-bar">
                        <ul>
                          <li className={activeTab === 0 ? 'active' : ''} onClick={() => handleTabClick(0)}><a>Project Management</a></li>
                          <li className={activeTab === 1 ? 'active' : ''} onClick={() => handleTabClick(1)}><a>Engineering</a></li>
                          <li className={activeTab === 2 ? 'active' : ''} onClick={() => handleTabClick(2)}><a>Sales</a></li>
                          <li className={activeTab === 3 ? 'active' : ''} onClick={() => handleTabClick(3)}><a>Marketing</a></li>
                          <li className={activeTab === 4 ? 'active' : ''} onClick={() => handleTabClick(4)}><a>Product</a></li>
                          <li className={activeTab === 5 ? 'active' : ''} onClick={() => handleTabClick(5)}><a>Design</a></li>
                          <li className={activeTab === 6 ? 'active' : ''} onClick={() => handleTabClick(6)}><a>Finance</a></li>
                          <li className={activeTab === 7 ? 'active' : ''} onClick={() => handleTabClick(7)}><a>HR</a></li>
                          <li className={activeTab === 8 ? 'active' : ''} onClick={() => handleTabClick(8)}><a>IT</a></li>
                        </ul>
                      </nav>                  
                </div>
                <div className="tabs-content">
                    <div className={`tab-item ${activeTab === 0 ? 'active' : ''}`}>
                        <div className="tab-content">
                            <div className="boxes" style={{display: "flex", flexDirection: "column"}}>
                                <div className="box">
                                    <div className="icon">
                                        <i className="fa fa-eye" style={{color: "#000000;"}}></i>
                                    </div>
                                    <div className="box-content">
                                        <p className="p-title">Visualize & Plan</p>
                                        <p className="p-content">Manage any project from start to finish with highly customizable views that make project planning a breeze.</p>
                                    </div>
                                </div>
                                <div className="box">
                                    <div className="icon">
                                        <i className="fa fa-handshake" style={{color: "#000000;"}}></i>
                                    </div>
                                    <div className="box-content">
                                        <p className="p-title">Collaborate</p>
                                        <p className="p-content">Work with your team in real-time with Chat, assign comments for action items, and never miss a beat with notifications that bring everything in one place.</p>
                                    </div>
                                </div>
                                <div className="box">
                                    <div className="icon">
                                        <i className="fa fa-list" style={{color: "#000000;"}}></i>
                                    </div>
                                    <div className="box-content">
                                        <p className="p-title">Track Progress</p>
                                        <p className="p-content">Add visual widgets for team members, tasks, sprints, time tracking, statuses, docs, embeds, and more.</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <img src="https://clickup.com/images/clickup-v3/CU_3.0_Teaser_LP_Task_View_Redesign_banner.png" />
                            </div>
                        </div>
                    </div>


                    <div className={`tab-item ${activeTab === 1 ? 'active' : ''}`}>
                        <div className="tab-content">
                            <div className="boxes" style={{display: "flex", flexDirection: "column"}}>
                                <div className="box">
                                    <div className="icon">
                                        <i className="fa fa-eye" style={{color: "#000000;"}}></i>
                                    </div>
                                    <div className="box-content">
                                        <p className="p-title">Visualize & Plan</p>
                                        <p className="p-content">Manage any project from start to finish with highly customizable views that make project planning a breeze.</p>
                                    </div>
                                </div>
                                <div className="box">
                                    <div className="icon">
                                        <i className="fa fa-handshake" style={{color: "#000000;"}}></i>
                                    </div>
                                    <div className="box-content">
                                        <p className="p-title">Collaborate</p>
                                        <p className="p-content">Work with your team in real-time with Chat, assign comments for action items, and never miss a beat with notifications that bring everything in one place.</p>
                                    </div>
                                </div>
                                <div className="box">
                                    <div className="icon">
                                        <i className="fa fa-list" style={{color: "#000000;"}}></i>
                                    </div>
                                    <div className="box-content">
                                        <p className="p-title">Track Progress</p>
                                        <p className="p-content">Add visual widgets for team members, tasks, sprints, time tracking, statuses, docs, embeds, and more.</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <img src="https://clickup.com/images/clickup-v3/CU_3.0_Teaser_LP_Task_View_Redesign_banner.png" />
                            </div>
                        </div>
                    </div>


                    <div className={`tab-item ${activeTab === 2 ? 'active' : ''}`}>
                        <div className="tab-content">
                            <div className="boxes" style={{display: "flex", flexDirection: "column"}}>
                                <div className="box">
                                    <div className="icon">
                                        <i className="fa fa-eye" style={{color: "#000000;"}}></i>
                                    </div>
                                    <div className="box-content">
                                        <p className="p-title">Visualize & Plan</p>
                                        <p className="p-content">Manage any project from start to finish with highly customizable views that make project planning a breeze.</p>
                                    </div>
                                </div>
                                <div className="box">
                                    <div className="icon">
                                        <i className="fa fa-handshake" style={{color: "#000000;"}}></i>
                                    </div>
                                    <div className="box-content">
                                        <p className="p-title">Collaborate</p>
                                        <p className="p-content">Work with your team in real-time with Chat, assign comments for action items, and never miss a beat with notifications that bring everything in one place.</p>
                                    </div>
                                </div>
                                <div className="box">
                                    <div className="icon">
                                        <i className="fa fa-list" style={{color: "#000000;"}}></i>
                                    </div>
                                    <div className="box-content">
                                        <p className="p-title">Track Progress</p>
                                        <p className="p-content">Add visual widgets for team members, tasks, sprints, time tracking, statuses, docs, embeds, and more.</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <img src="https://clickup.com/images/clickup-v3/CU_3.0_Teaser_LP_Task_View_Redesign_banner.png" />
                            </div>
                        </div>
                    </div>


                    <div className={`tab-item ${activeTab === 3 ? 'active' : ''}`}>
                        <div className="tab-content">
                            <div className="boxes" style={{display: "flex", flexDirection: "column"}}>
                                <div className="box">
                                    <div className="icon">
                                        <i className="fa fa-eye" style={{color: "#000000;"}}></i>
                                    </div>
                                    <div className="box-content">
                                        <p className="p-title">Visualize & Plan</p>
                                        <p className="p-content">Manage any project from start to finish with highly customizable views that make project planning a breeze.</p>
                                    </div>
                                </div>
                                <div className="box">
                                    <div className="icon">
                                        <i className="fa fa-handshake" style={{color: "#000000;"}}></i>
                                    </div>
                                    <div className="box-content">
                                        <p className="p-title">Collaborate</p>
                                        <p className="p-content">Work with your team in real-time with Chat, assign comments for action items, and never miss a beat with notifications that bring everything in one place.</p>
                                    </div>
                                </div>
                                <div className="box">
                                    <div className="icon">
                                        <i className="fa fa-list" style={{color: "#000000;"}}></i>
                                    </div>
                                    <div className="box-content">
                                        <p className="p-title">Track Progress</p>
                                        <p className="p-content">Add visual widgets for team members, tasks, sprints, time tracking, statuses, docs, embeds, and more.</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <img src="https://clickup.com/images/clickup-v3/CU_3.0_Teaser_LP_Task_View_Redesign_banner.png" />
                            </div>
                        </div>
                    </div>


                    <div className={`tab-item ${activeTab === 4 ? 'active' : ''}`}>
                        <div className="tab-content">
                            <div className="boxes" style={{display: "flex", flexDirection: "column"}}>
                                <div className="box">
                                    <div className="icon">
                                        <i className="fa fa-eye" style={{color: "#000000;"}}></i>
                                    </div>
                                    <div className="box-content">
                                        <p className="p-title">Visualize & Plan</p>
                                        <p className="p-content">Manage any project from start to finish with highly customizable views that make project planning a breeze.</p>
                                    </div>
                                </div>
                                <div className="box">
                                    <div className="icon">
                                        <i className="fa fa-handshake" style={{color: "#000000;"}}></i>
                                    </div>
                                    <div className="box-content">
                                        <p className="p-title">Collaborate</p>
                                        <p className="p-content">Work with your team in real-time with Chat, assign comments for action items, and never miss a beat with notifications that bring everything in one place.</p>
                                    </div>
                                </div>
                                <div className="box">
                                    <div className="icon">
                                        <i className="fa fa-list" style={{color: "#000000;"}}></i>
                                    </div>
                                    <div className="box-content">
                                        <p className="p-title">Track Progress</p>
                                        <p className="p-content">Add visual widgets for team members, tasks, sprints, time tracking, statuses, docs, embeds, and more.</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <img src="https://clickup.com/images/clickup-v3/CU_3.0_Teaser_LP_Task_View_Redesign_banner.png" />
                            </div>
                        </div>
                    </div>


                    <div className={`tab-item ${activeTab === 5 ? 'active' : ''}`}>
                        <div className="tab-content">
                            <div className="boxes" style={{display: "flex", flexDirection: "column"}}>
                                <div className="box">
                                    <div className="icon">
                                        <i className="fa fa-eye" style={{color: "#000000;"}}></i>
                                    </div>
                                    <div className="box-content">
                                        <p className="p-title">Visualize & Plan</p>
                                        <p className="p-content">Manage any project from start to finish with highly customizable views that make project planning a breeze.</p>
                                    </div>
                                </div>
                                <div className="box">
                                    <div className="icon">
                                        <i className="fa fa-handshake" style={{color: "#000000;"}}></i>
                                    </div>
                                    <div className="box-content">
                                        <p className="p-title">Collaborate</p>
                                        <p className="p-content">Work with your team in real-time with Chat, assign comments for action items, and never miss a beat with notifications that bring everything in one place.</p>
                                    </div>
                                </div>
                                <div className="box">
                                    <div className="icon">
                                        <i className="fa fa-list" style={{color: "#000000;"}}></i>
                                    </div>
                                    <div className="box-content">
                                        <p className="p-title">Track Progress</p>
                                        <p className="p-content">Add visual widgets for team members, tasks, sprints, time tracking, statuses, docs, embeds, and more.</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <img src="https://clickup.com/images/clickup-v3/CU_3.0_Teaser_LP_Task_View_Redesign_banner.png" />
                            </div>
                        </div>
                    </div>


                    <div className={`tab-item ${activeTab === 6 ? 'active' : ''}`}>
                        <div className="tab-content">
                            <div className="boxes" style={{display: "flex", flexDirection: "column"}}>
                                <div className="box">
                                    <div className="icon">
                                        <i className="fa fa-eye" style={{color: "#000000;"}}></i>
                                    </div>
                                    <div className="box-content">
                                        <p className="p-title">Visualize & Plan</p>
                                        <p className="p-content">Manage any project from start to finish with highly customizable views that make project planning a breeze.</p>
                                    </div>
                                </div>
                                <div className="box">
                                    <div className="icon">
                                        <i className="fa fa-handshake" style={{color: "#000000;"}}></i>
                                    </div>
                                    <div className="box-content">
                                        <p className="p-title">Collaborate</p>
                                        <p className="p-content">Work with your team in real-time with Chat, assign comments for action items, and never miss a beat with notifications that bring everything in one place.</p>
                                    </div>
                                </div>
                                <div className="box">
                                    <div className="icon">
                                        <i className="fa fa-list" style={{color: "#000000;"}}></i>
                                    </div>
                                    <div className="box-content">
                                        <p className="p-title">Track Progress</p>
                                        <p className="p-content">Add visual widgets for team members, tasks, sprints, time tracking, statuses, docs, embeds, and more.</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <img src="https://clickup.com/images/clickup-v3/CU_3.0_Teaser_LP_Task_View_Redesign_banner.png" />
                            </div>
                        </div>
                    </div>


                    <div className={`tab-item ${activeTab === 7 ? 'active' : ''}`}>
                        <div className="tab-content">
                            <div className="boxes" style={{display: "flex", flexDirection: "column"}}>
                                <div className="box">
                                    <div className="icon">
                                        <i className="fa fa-eye" style={{color: "#000000;"}}></i>
                                    </div>
                                    <div className="box-content">
                                        <p className="p-title">Visualize & Plan</p>
                                        <p className="p-content">Manage any project from start to finish with highly customizable views that make project planning a breeze.</p>
                                    </div>
                                </div>
                                <div className="box">
                                    <div className="icon">
                                        <i className="fa fa-handshake" style={{color: "#000000;"}}></i>
                                    </div>
                                    <div className="box-content">
                                        <p className="p-title">Collaborate</p>
                                        <p className="p-content">Work with your team in real-time with Chat, assign comments for action items, and never miss a beat with notifications that bring everything in one place.</p>
                                    </div>
                                </div>
                                <div className="box">
                                    <div className="icon">
                                        <i className="fa fa-list" style={{color: "#000000;"}}></i>
                                    </div>
                                    <div className="box-content">
                                        <p className="p-title">Track Progress</p>
                                        <p className="p-content">Add visual widgets for team members, tasks, sprints, time tracking, statuses, docs, embeds, and more.</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <img src="https://images.ctfassets.net/w8fc6tgspyjz/5roZ9B0wNRq47T3CQVSJhg/c36d845be59812dd6429e5f2c5b0e9f1/task-view.png?fm=avif&q=50&w=1200" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default NavigationSection2  