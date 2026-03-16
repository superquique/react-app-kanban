import { useDrop } from 'react-dnd'
import Task from "./Task";

function Column (props) {

    const moveTask = (taskId) => {
        const filteredTask = props.taskList.find((task) => {
            return task.id === taskId;
        })

        filteredTask.status = props.columnType;

        console.log(filteredTask);

        props.onUpdate(filteredTask);
       
    }

    const [collectedProps, drop] = useDrop(() => ({
        accept: 'TASK',
        drop: (item) => moveTask(item.id)
    }))

    const filteredTasks = props.taskList.filter((task) => {
        return task.status === props.columnType;
    })
    

    return (
        <div ref={drop} className="column" style={{
            backgroundColor: props.bgColorConten,
            borderColor: props.bgColorTitle
            }}>
            <h3 style={{backgroundColor: props.bgColorTitle}}>
                {props.columnType}
            </h3>
            
            { props.columnType === "To Do" &&
                <div id="add-task-button">
                    <button style={{backgroundColor: props.bgColorTitle}} onClick={ props.onToggleForm }>Add new task</button>
                </div>
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