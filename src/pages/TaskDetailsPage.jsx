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
                <form onSubmit={handleSubmit} className="task-detail-card" style={{
                    backgroundColor: bgColor,
                    borderColor: borderColor
                }}>
                    <div className="header-task-detail-card">
                        <input 
                            type="text" 
                            name="title" 
                            value={title}
                            onChange={ e => setTitle(e.target.value) }
                        />
                    </div>

                    <div className="info-task-detail-card">
                        <div className="column-task-detail-card">
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

                            <button>Save</button>
                        </div>

                        <div className="column-task-detail-card">
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
                        
                            <button>
                                <Link to="/">Cancel</Link>
                            </button>
                
                        </div>
                    </div>
                </form>
            }
        </div>
    )
}

export default TaskDetailsPage;