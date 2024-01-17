import React, { useState } from 'react';
import Logo1 from "../images/logo2.png";
import StudyComponent from '../components/StudyComponent';
import { FaCirclePlus } from "react-icons/fa6";
//import QuizComponent from '../components/QuizComponent';
//import TestComponent from '../components/TestComponent';
//import GameComponent from '../components/GameComponent';
//import OthersComponent from '../components/OthersComponent';

const Dashboard = () => {
  const [activeComponent, setActiveComponent] = useState('study');

  const handleTabClick = (tab) => {
    setActiveComponent(tab);
  };

  return (
    <div className='flex w-full flex-col justify-center items-center'>
      <div className='flex space-x-4 gap-x-4'>
        <div
          onClick={() => handleTabClick('study')}
          className={`cursor-pointer ${activeComponent === 'study' ? 'text-blue-700 font-bold border-b-2 border-blue-700' : 'text-gray-500'}`}
        >
          Study
        </div>
        <div
          onClick={() => handleTabClick('quiz')}
          className={`cursor-pointer ${activeComponent === 'quiz' ? 'text-blue-700 font-bold border-b-2 border-blue-700' : 'text-gray-500'}`}
        >
          Quiz
        </div>
        <div
          onClick={() => handleTabClick('test')}
          className={`cursor-pointer ${activeComponent === 'test' ? 'text-blue-700 font-bold border-b-2 border-blue-700' : 'text-gray-500'}`}
        >
          Test
        </div>
        <div
          onClick={() => handleTabClick('game')}
          className={`cursor-pointer ${activeComponent === 'game' ? 'text-blue-700 font-bold border-b-2 border-blue-700' : 'text-gray-500'}`}
        >
          Game
        </div>
        <div
          onClick={() => handleTabClick('others')}
          className={`cursor-pointer ${activeComponent === 'others' ? 'text-blue-700 font-bold border-b-2 border-blue-700' : 'text-gray-500'}`}
        >
          Others
        </div>
      </div>

      {activeComponent === 'study' && <StudyComponent />}
      {/*{activeComponent === 'quiz' && <QuizComponent />}
      {activeComponent === 'test' && <TestComponent />}
      {activeComponent === 'game' && <GameComponent />}
      {activeComponent === 'others' && <OthersComponent />}*/}

      <div class="flex w-full justify-between items-center space-x-4 ">
        <div class="ml-10">
          <div class="shadow rounded-full w-24 h-24 flex items-center ">
            <img src={Logo1} alt="logo" class="w-full h-auto" />
                         
              <div class=" flex flex-col ml-3 ">
                <span class="text-gray-600 text-xl ">powered by</span>
               <span className='font-bold text-2xl text-blue-900'>Hyggex</span> 
              </div>
            
          </div>
        </div>
        <div class="flex items-center space-x-2">
          <span class="text-blue-900 "><FaCirclePlus size={40}/></span>
          <span className='font-medium text-xl text-blue-900'>Create FlashCard</span>
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
