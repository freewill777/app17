import * as React from 'react'

import List from "@mui/material/List";


import Task from './components/Task';

export default function TaskList({ taskElements, toggleTask, renameTask }) {
    return (
        <List sx={{ width: "100%", bgcolor: "background.paper" }} >
            {taskElements.map((item) => {
                return (
                    <Task
                        key={item.id}
                        item={item}
                        toggleTask={toggleTask}
                        renameTask={renameTask}
                    />
                );
            })}
        </List>
    )
}