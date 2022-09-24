import * as React from 'react'

import List from "@mui/material/List";

import taskuri from './data.json'
import Task from './components/Task';

export default function TaskList() {
    const [taskElements, setTaskElements] = React.useState(taskuri)
    function toggleTask(id) {
        const taskId = id
        let newCopy = taskElements.map(task => {
            if (task.id === Number(taskId)) { // conditia pentru ca elementul sa fie gasit
                return { ...task, complete: !task.complete } // structura returnata pentru elementul gasit
            } else {
                return { ...task } // structura returnata pentru restul elementelor
            }
        })
        setTaskElements(newCopy)
    }
    function renameTask(id, newTask) { // TO DO
        const taskId = id
        let newCopy = taskElements.map(task => {
            if (task.id === Number(taskId)) { // conditia pentru ca elementul sa fie gasit
                return { ...task, task: newTask } // structura returnata pentru elementul gasit
            } else {
                return { ...task } // structura returnata pentru restul elementelor
            }
        })
        setTaskElements(newCopy)
    }
    function handleFilter() { // SHOW INCOMPLETE TASKS
        const filtered = taskElements.filter(task => !task.complete)
        setTaskElements(filtered)
    }

    const materialTaskList = (
        <List sx={{ width: "100%", bgcolor: "background.paper" }} >
            <button onClick={handleFilter}>Filter elements</button>
            {taskElements.map((item) => {
                return (
                    <Task item={item} toggleTask={toggleTask} />
                );
            })}
        </List>
    )
    return materialTaskList
}