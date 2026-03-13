import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function TaskDetailsPage ({ taskArr, onUpdate }) {
    const {taskId} = useParams();
    const taskDetails = taskArr.find((task) => {
        return task.id === taskId
    })

    const [id, setId] = useState(taskDetails.id);
    const [title, setTitle] = useState(taskDetails.title);
    const [description, setDescription] = useState(taskDetails.description);
    const [assignee, setAssignee] = useState(taskDetails.assignee);
    const [status, setStatus] = useState(taskDetails.status);
    const [priority, setPriority] = useState(taskDetails.priority);
    const [createdDate, setCreatedDate] = useState(taskDetails.createdDate);
    const [dueDate, setDueDate] = useState(taskDetails.dueDate);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        console.log("handlig submit...")
        e.preventDefault();

        const updatedTask = {
            id: id,
            title: title,
            description: description,
            assignee: assignee,
            status: status,
            priority: priority,
            createdDate: createdDate,
            dueDate: dueDate
        }

        onUpdate(updatedTask);

        navigate("/");
    }

    return (
        <div className="task-page">
            { taskDetails &&
            <div className="task-detail-card">  

                <form onSubmit={handleSubmit} className="form">
                    <label>
                        Title
                        <input 
                            type="text" 
                            name="title" 
                            value={title}
                            onChange={ e => setTitle(e.target.value) }
                        />
                    </label>

                    <label>
                        Description
                        <input 
                            type="text" 
                            name="description" 
                            value={description}
                            onChange={ e => setDescription(e.target.value) }
                        />
                    </label>

                    <label>
                        Assignee
                        <input 
                            type="text" 
                            name="assignee" 
                            value={assignee}
                            onChange={ e => setAssignee(e.target.value) }
                        />
                    </label>

                    <label>
                        Status
                        <select 
                            name="status"
                            value={status}
                            onChange={ e => setStatus(e.target.value) }
                        >
                            <option value="To Do">To Do</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Done">Done</option>
                        </select>
                    </label>

                    <label>
                        Priority
                        <select 
                            name="priority"
                            value={priority}
                            onChange={ e => setPriority(e.target.value) }
                        >
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </select>
                    </label>

                    <label>
                        Created date
                        <input 
                            type="date" 
                            name="created-date" 
                            value={createdDate}
                            onChange={ e => setCreatedDate(e.target.value) }
                        />
                    </label>

                    <label>
                        Due date
                        <input 
                            type="date" 
                            name="due-date"
                            value={dueDate}
                            onChange={ e => setDueDate(e.target.value) }
                        />
                    </label>
                    
                    <button>Save</button>
                </form>
                {/* <div className="task-header-detail">
                    <div className="task-header-child">        
                        <h2>
                            {taskDetails.title}
                        </h2>
                        
                    </div>

                    <div>
                        <p>
                            Assignee: {taskDetails.assignee}
                        </p>
                    </div>
                </div>

                <div>
                    <p>
                        {taskDetails.description}
                    </p>
                </div>
                
                <div className="task-details">
                    <div className="task-details-column">
                        <div class="task-details-element">
                            <p>
                                Status
                            </p>

                            <p>
                                {taskDetails.status}
                            </p>
                        </div>

                        <div class="task-details-element">
                            <p>
                                Priority
                            </p>

                            <p>
                                {taskDetails.priority}
                            </p>
                        </div>
                    </div>

                    <div className="task-details-column">
                        <div class="task-details-element">
                            <p>
                                Created date
                            </p>

                            <p>
                                {taskDetails.createdDate}
                            </p>
                        </div>

                        <div class="task-details-element">
                            <p>
                                Due date
                            </p>

                            <p>
                                {taskDetails.dueDate}
                            </p>
                        </div>
                    </div>
                    
                </div> */}
            </div>
            }
        </div>
    )
}

export default TaskDetailsPage;