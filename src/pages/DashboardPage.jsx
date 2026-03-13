import { useState } from "react";
import Column from "../components/Column";
import AddTask from "../components/AddTask";

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

            <Column 
                bgColorTitle="red" 
                bgColorTask="lightCoral" 
                taskList={props.taskList}
                columnType="To Do"
                deleteTaskCallback={props.onDelete}
                onToggleForm={toggleForm}
            />
            <Column 
                bgColorTitle="orangeRed" 
                bgColorTask="lightSalmon" 
                taskList={props.taskList}
                columnType="In Progress"
                deleteTaskCallback={props.onDelete}
            />
            <Column 
                bgColorTitle="blue" 
                bgColorTask="lightSteelBlue" 
                taskList={props.taskList}
                columnType="Done"
                deleteTaskCallback={props.onDelete}
            />
        </>
    )
}

export default DashboardPage;