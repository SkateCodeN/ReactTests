import React, { useState,useEffect } from "react";
import Task from './Task';
import FilterBar from "./FilterBar";
import AddTask from "./AddTask";

const ToDoList = () => {
    const [tasks, setTasks] = useState([]);
    
    const [currentFilter, setCurrentFilter] = useState("all");

    // Side effect to save tasks on task change
    useEffect( () => {
        
        localStorage.setItem('tasks', JSON.stringify(tasks))
        console.log("saved to locslStorage", JSON.stringify(tasks) )
    },[tasks]);

    useEffect(() => {
        const storedTasks = localStorage.getItem("tasks");
        if (storedTasks) {
          setTasks(JSON.parse(storedTasks));
        }
      }, []);

    // Handles deleting a task based on its id
    const updateOnTaskDelete = (id) => {
    
        setTasks(tasks.filter(task => task.id !== id));
       
    }

    //if the user clicks that the task is complete we
    // update the task to update its bool and update state
    // for both the task list and completed list
    const updateOnTaskComplete = (id) => {
        
        setTasks(tasks.map(task => 
            task.id === id ? {...task, completed: true}: task
        ));
        
    }

    const updateAndAddNewTask = (task) =>{
        setTasks((tasks) => [...tasks, task]);
        
    }
    const handleFilterChange =(newFilter) =>{
        setCurrentFilter(newFilter)
    }
    
    //Single state point for filtering
    const filteredTasks = tasks.filter((task) =>{
        if(currentFilter === "all") return true;
        if( currentFilter==="active") return !task.completed;
        if(currentFilter === "completed") return task.completed;
        return true;
    });

    if (!tasks) return <p>Loading Tasks...</p>

    return (
        <>
            <h2>Task Manager</h2>
            <div>
                <FilterBar
                    currentFilter={currentFilter}
                    onFilterChange={handleFilterChange}
                />
            </div>
            <ul>
                {
                    filteredTasks.map((taskObj) => (
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

        </>
    )
}

export default ToDoList;