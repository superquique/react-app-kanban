import Column from "../components/Column";

function DashboardPage (props) {
    return (
        <>
            <Column 
                bgColorTitle="red" 
                bgColorTask="lightCoral" 
                taskList={props.taskList}
                columnType="To Do"
                deleteTaskCallback={props.onDelete}
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