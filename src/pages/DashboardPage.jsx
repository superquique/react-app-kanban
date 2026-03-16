import { useState } from "react";
import Column from "../components/Column";
import AddTask from "../components/AddTask";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function DashboardPage (props) {

    const [formOpened, setFormOpened] = useState(false);

    const toggleForm = () => {
        setFormOpened(!formOpened);
    }

    return (
        <>
            {formOpened &&
                <AddTask 
                    onCreate={props.onCreate}
                    onToggleForm={toggleForm}
                />
            }
            
            <DndProvider backend={HTML5Backend}>
                <Column 
                    bgColorTitle={props.taskColors["To Do"][0]}
                    bgColorTask={props.taskColors["To Do"][1]} 
                    taskList={props.taskList}
                    columnType="To Do"
                    deleteTaskCallback={props.onDelete}
                    onToggleForm={toggleForm}
                    onUpdate={props.onUpdate}
                />
                <Column 
                    bgColorTitle={props.taskColors["In Progress"][0]}
                    bgColorTask={props.taskColors["In Progress"][1]} 
                    taskList={props.taskList}
                    columnType="In Progress"
                    deleteTaskCallback={props.onDelete}
                    onUpdate={props.onUpdate}
                />
                <Column 
                    bgColorTitle={props.taskColors["Done"][0]}
                    bgColorTask={props.taskColors["Done"][1]} 
                    taskList={props.taskList}
                    columnType="Done"
                    deleteTaskCallback={props.onDelete}
                    onUpdate={props.onUpdate}
                />
            </DndProvider>
        </>
    )
}

export default DashboardPage;