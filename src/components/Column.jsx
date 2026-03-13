import Task from "./Task";

function Column (props) {

    const filteredTasks = props.taskList.filter((task) => {
        return task.status === props.columnType;
    })

    return (
        <div className="column" style={{backgroundColor: props.bgColorContent}}>
            <h3 style={{backgroundColor: props.bgColorTitle}}>
                {props.columnType}
            </h3>
            
            { props.columnType === "To Do" &&
                <button onClick={ props.onToggleForm }>Add new task</button>
            }

            { filteredTasks &&
                filteredTasks.map((taskObj, i, arr) => {
                    return (
                        <Task 
                            taskDetails={taskObj} 
                            key={taskObj.id} 
                            bgColor={props.bgColorTask}
                            deleteCallback={props.deleteTaskCallback}
                        />
                    )
                })
            }
        </div>
    )
}

export default Column;