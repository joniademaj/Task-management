import React from 'react';
import '../NavigationSection.css'; // Import the CSS file
import { useState } from 'react';

const NavigationSection = () => {
    const [activeTab, setActiveTab] = useState(0); // Track the active tab

    const handleTabClick = (tabIndex) => {
      setActiveTab(tabIndex); // Update the active tab when a tab is clicked
    };
  
    return (
      <div className="tabs-container">
        <ul className="tabs-nav">
          <li className={activeTab === 0 ? 'active' : ''} onClick={() => handleTabClick(0)}>Project & Tasks</li>
          <li className={activeTab === 1 ? 'active' : ''} onClick={() => handleTabClick(1)}>Chat</li>
          <li className={activeTab === 2 ? 'active' : ''} onClick={() => handleTabClick(2)}>Goals</li>
          <li className={activeTab === 3 ? 'active' : ''} onClick={() => handleTabClick(3)}>Views</li>
        </ul>
        <div className="tabs-content">
          <div className={`tab-item ${activeTab === 0 ? 'active' : ''}`}>
            <div className="tab-content">
                <div>
                    <h1>Simplify work and get more done.</h1>
                    <p>Plan, track, and manage any type of work with project management that flexes to your team's needs.</p>
                    <button>Get Started</button>
                </div>
                <div>
                    <img src="https://clickup.com/images/clickup-v3/CU_3.0_Teaser_LP_Task_View_Redesign_banner.png" />
                </div>
            </div>
          </div>
          <div className={`tab-item ${activeTab === 1 ? 'active' : ''}`}>
            <div className="tab-content">
                <div>
                    <h1>Bring everyone together in Chat.</h1>
                    <p>Work smarter as a team with real-time chat. Tag individuals or groups, assign comments for action items, and link tasks to get more done together.</p>
                    <button>Get Started</button>
                </div>
                <div>
                    <img src="https://images.ctfassets.net/w8fc6tgspyjz/5roZ9B0wNRq47T3CQVSJhg/c36d845be59812dd6429e5f2c5b0e9f1/task-view.png?fm=avif&q=50&w=1200" />
                </div>
            </div>
          </div>
          <div className={`tab-item ${activeTab === 2 ? 'active' : ''}`}>
            <div className="tab-content">
                <div>
                    <h1>Set goals and crush them faster.</h1>
                    <p>Stay on track to hit your goals with targets for task completions, numbers, monetary values and more. Track progress in real-time connecting tasks to goals and keep your objectives organized with Goal Folders.</p>
                    <button>Get Started</button>
                </div>
                <div>
                    <img src="https://clickup.com/images/clickup-v3/CU_3.0_Teaser_LP_Task_View_Redesign_banner.png" />
                </div>
            </div>
          </div>
          <div className={`tab-item ${activeTab === 3 ? 'active' : ''}`}>
            <div className="tab-content">
                <div>
                    <h1>See your work, your way.</h1>
                    <p>Tackle work from any angle with 20+ real-time views that adapt to your needs. Track tasks on List, update workflows on a Board, drag-and-drop due dates on a Calendar, and so much more.</p>
                    <button>Get Started</button>
                </div>
                <div>
                    <img src="https://clickup.com/images/clickup-v3/CU_3.0_Teaser_LP_Task_View_Redesign_banner.png" />
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default NavigationSection;