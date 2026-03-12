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
  
  return (
    <div className='app-container'>
      <Navbar />
        <div className="app-content">
          <Sidebar />

          <Routes>
            <Route path="/" element={<DashboardPage taskList={taskList} onDelete={deleteTask} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/task-details/:taskId" element={<TaskDetailsPage taskArr={taskList} />} />
            <Route path="*" element={ <h1 className='not-found'>Página no encontrada</h1> } />
          </Routes>
          

        </div>

      <Footer />
    </div>
  )
}

export default App
