import { Link } from "react-router-dom";

function Task (props) {
    return (
        <div className="task" style={{backgroundColor: props.bgColor}}>
            { props.taskDetails &&
            <>  
                <div className="task-header">
                    <div className="task-header-child">
                        {props.taskDetails.priority === "High" &&
                            <svg width="24px" height="24px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                            </svg>
                        }
                        <Link to={`/task-details/${props.taskDetails.id}`}>
                            <h4>
                                {props.taskDetails.title}
                            </h4>
                        </Link> 
                    </div>
                    <div className="task-header-child" onClick={() => {props.deleteCallback(props.taskDetails.id)}}>
                        <svg width="24px" height="24px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
                <p>
                    {props.taskDetails.description}
                </p>
                <div className="task-footer">
                    <p className="task-footer-child">
                        {props.taskDetails.dueDate}
                    </p>
                    <p className="task-footer-child">
                        {props.taskDetails.assignee}
                    </p>

                </div>
            </>
            }
        </div>
    )
}

export default Task;