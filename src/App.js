import React from "react"
import Banner from "./Banner"
import TaskList from "./TaskList"

import taskuri from './data.json'

export default function App() {
  const [taskElements, setTaskElements] = React.useState(taskuri)
  function clearCompleted() { // SHOW INCOMPLETE TASKS
    const filtered = taskElements.filter(task => !task.complete)
    setTaskElements(filtered)
  }
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
  return (
    <div className="container">
      <Banner clearCompleted={clearCompleted} />
      <TaskList taskElements={taskElements} toggleTask={toggleTask} />
    </div>
  )
}
