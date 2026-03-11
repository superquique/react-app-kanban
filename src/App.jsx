import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Column from './components/Column';

import tasks from './data/tasks.json';


function App() {

  const [taskList, setTaskList] = useState(tasks);

  const deleteTask = (taskId) => {
    const newTaskList = taskList.filter((task) => {
      return task.id !== taskId;
    })

    setTaskList(newTaskList);
  }
  
  return (
    <div className='app-container'>
      <Navbar />
        <div className="app-content">
          <Sidebar />

          <Column 
            bgColorTitle="red" 
            bgColorTask="lightCoral" 
            taskList={taskList}
            columnType="To Do"
            deleteTaskCallback={deleteTask}
          />

          <Column 
            bgColorTitle="orangeRed" 
            bgColorTask="lightSalmon" 
            taskList={taskList}
            columnType="In Progress"
            deleteTaskCallback={deleteTask}
          />

          <Column 
            bgColorTitle="blue" 
            bgColorTask="lightSteelBlue" 
            taskList={taskList}
            columnType="Done"
            deleteTaskCallback={deleteTask}
          />

        </div>

      <Footer />
    </div>
  )
}

export default App
