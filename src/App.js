import React from "react"
import Banner from "./Banner"
import TaskList from "./TaskList"

import taskuri from './data.json'

export default function App() {
  const [taskElements, setTaskElements] = React.useState(taskuri)
  const [searchText, setSearchText] = React.useState('')
  const filteredElements = taskElements.filter(element => element.task.toLowerCase().includes(searchText))
  function clearCompleted() {
    const filtered = taskElements.filter(task => !task.complete)
    setTaskElements(filtered)
  }
  function toggleTask(id) {
    const taskId = id
    const newCopy = taskElements.map(task => {
      if (task.id === Number(taskId)) { // conditia pentru ca elementul sa fie gasit
        return { ...task, complete: !task.complete } // structura returnata pentru elementul gasit
      } else {
        return { ...task } // structura returnata pentru restul elementelor
      }
    })
    setTaskElements(newCopy)
  }
  function renameTask(id, newTask) {
    const taskId = id
    const newCopy = taskElements.map(task => {
      if (task.id === Number(taskId)) { // conditia pentru ca elementul sa fie gasit
        return { ...task, task: newTask } // structura returnata pentru elementul gasit
      } else {
        return { ...task } // structura returnata pentru restul elementelor
      }
    })
    setTaskElements(newCopy)
  }

  function handleSearchText(input) {
    setSearchText(input);
  }
  return (
    <div className="container">
      <Banner
        clearCompleted={clearCompleted}
        filterTasks={handleSearchText}
      />
      <TaskList
        taskElements={filteredElements}
        toggleTask={toggleTask}
        renameTask={renameTask}
      />
    </div>
  )
}
