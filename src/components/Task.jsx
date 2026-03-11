function Task (props) {
    return (
        <div className="task" style={{backgroundColor: props.bgColor}}>
            { props.taskDetails &&
            <>  
                <div className="task-header">
                    <h4>
                        {props.taskDetails.title}
                    </h4>
                    <div onClick={() => {props.deleteCallback(props.taskDetails.id)}}>
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