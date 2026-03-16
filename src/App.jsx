import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import DashboardPage from './pages/DashboardPage';
import tasks from './data/tasks.json';
import { Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import TaskDetailsPage from './pages/TaskDetailsPage';



function App() {

  const [taskList, setTaskList] = useState(tasks);

  const deleteTask = (taskId) => {
    const newTaskList = taskList.filter((task) => {
      return task.id !== taskId;
    })

    setTaskList(newTaskList);
  }

  const addTask = (newTaskDetails) => {
    console.log("adding new task...");
    const newId = Math.max(...taskList.map(taskObj => taskObj.id)) + 1;
    console.log("newId", newId);
    newTaskDetails.id = String(newId);
    console.log("newTaskDetails", newTaskDetails);
    const newTaskList = [newTaskDetails, ...taskList];
    setTaskList(newTaskList);
  }

  const updateTask = (taskDetails) => {
    const filteredTasks = taskList.filter(task => taskDetails.id !== task.id);
    const newTaskList = [taskDetails, ...filteredTasks];
    setTaskList(newTaskList);
  }

  const taskColors = {
    "To Do": ["crimson", "#ED4062"],
    "In Progress": ["#DC5014", "#ED7440"],
    "Done": ["#14A0DC", "#40B9ED"]
  }  

  return (
    <div className='app-container'>
      <Navbar />
        <div className="app-content">
          <Sidebar />

          <Routes>
            <Route path="/" element={
              <DashboardPage 
                taskList={taskList} 
                onDelete={deleteTask} 
                onCreate={addTask} 
                onUpdate={updateTask}
                taskColors={taskColors}
              />} 
            />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/task-details/:taskId" element={
              <TaskDetailsPage 
                taskArr={taskList} 
                onUpdate={updateTask} 
                taskColors={taskColors}
              />
            } />
            <Route path="*" element={ <h1 className='not-found'>Página no encontrada</h1> } />
          </Routes>
          

        </div>

      <Footer />
    </div>
  )
}

export default App
