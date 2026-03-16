import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function TaskDetailsPage ({ taskArr, onUpdate, taskColors }) {
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

    const borderColor = taskColors[status][0];
    const bgColor = taskColors[status][1];

    return (
        
        <div className="task-page">
            { taskDetails &&
            <div className="task-detail-card" > 
                <form onSubmit={handleSubmit} className="form" style={{
                    backgroundColor: bgColor,
                    borderColor: borderColor
                }}>
                    <Link to="/">
                        <div className="task-header-child" onClick={() => {}}>
                            <svg width="24px" height="24px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </div>
                    </Link>
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
                    
                    <button style={{
                        backgroundColor: borderColor
                    }}>Save</button>
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