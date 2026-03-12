import { useParams } from "react-router-dom";

function TaskDetailsPage ({ taskArr }) {
    const {taskId} = useParams();
    const taskDetails = taskArr.find((task) => {
        return task.id === taskId
    })

    console.log(taskDetails)

    return (
        <div className="task-page">
            { taskDetails &&
            <>  
                <div className="task-header">
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
                    
                </div>
            </>
            }
        </div>
    )
}

export default TaskDetailsPage;