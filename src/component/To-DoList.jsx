import React, { useState } from "react";
import Task from './Task';
import CompletedTaskList from "./CompletedTaskList";
import FilterBar from "./FilterBar";
import AddTask from "./AddTask";

const ToDoList = () => {
    const [tasks, setTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);

    // Handles deleting a task based on its id
    const updateOnTaskDelete = (id) => {
        const newTaskList = tasks.filter((task) => {
            if (task.id != id) {
                return task;
            }
        })
        setTasks(newTaskList);
    }

    //if the user clicks that the task is complete we
    // update the task to update its bool and update state
    // for both the task list and completed list
    const updateOnTaskComplete = (id) => {
        const newTaskList = tasks.filter((task) => {
            if (task.id === id) {
                task.completed = true;
                //setCompletedTasks((oldVal) => [...oldVal,task])
            }
            return task;
        })
        setTasks(newTaskList);

    }

    // This receives tasks state changes based on wha is clicked in 
    // the filtering component.
    const handleTaskStateChange = (filteredTasks) => {
        setCompletedTasks(filteredTasks);
        //setTasks(filteredTasks);
    }

    const updateAndAddNewTask = (task) =>{
        setTasks((tasks) => [...tasks, task]);
    }

    if (!tasks) return <p>Loading Tasks...</p>

    return (
        <>
            <h3>Your Tasks:</h3>
            <div>
                <FilterBar

                    handleStateChange={handleTaskStateChange}
                    tasks={tasks}
                />
            </div>
            <ul>
                {
                    tasks.map((taskObj) => (
                        <li key={taskObj.id}>
                            <Task
                                task={taskObj}
                                handleDelete={updateOnTaskDelete}
                                handleComplete={updateOnTaskComplete} />
                        </li>
                    ))
                }
            </ul>

            <AddTask addNewTask={updateAndAddNewTask} />

            <div>
                <CompletedTaskList
                    taskList={completedTasks}
                    handleDelete={updateOnTaskDelete}
                    handleComplete={updateOnTaskComplete}
                />
            </div>

        </>
    )
}

export default ToDoList;