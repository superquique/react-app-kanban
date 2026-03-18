import { useState } from "react";

function AddTask ({ onCreate, onToggleForm }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [assignee, setAssignee] = useState("");
    const [status, setStatus] = useState("To Do");
    const [priority, setPriority] = useState("Low");
    const [createdDate, setCreatedDate] = useState("");
    const [dueDate, setDueDate] = useState("");

    
    const handleSubmit = (e) => {
        console.log("handlig submit...")
        e.preventDefault();

        const newTask = {
            title: title,
            description: description,
            assignee: assignee,
            status: status,
            priority: priority,
            createdDate: createdDate,
            dueDate: dueDate
        }

        console.log("newTask", newTask);

        onCreate(newTask);

        onToggleForm();

    }

    return (
        <div className="add-task">
            <form onSubmit={handleSubmit} className="form">
                <div className="form-header-add-task">
                    <h3>New Task</h3> 
                    <label>
                        <input 
                            type="text" 
                            name="title"
                            placeholder="Add a title"
                            value={title}
                            onChange={ e => setTitle(e.target.value) }
                            />
                    </label>
                </div>

                <div className="form-details-add-tasks">
                    <div className="form-column-add-task">
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

                        <button type="submit" >Add new task</button>
                    </div>
        
                    <div className="form-column-add-task">
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

                        
                        <button onClick={onToggleForm}>Cancel</button>
                    </div>
                </div>
            </form>
        </div>
    )
} 

export default AddTask;