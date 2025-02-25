import React, { useState } from "react";
import Task from './Task';
import CompletedTaskList from "./CompletedTaskList";
import FilterBar from "./FilterBar";


const ToDoList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [completedTasks, setCompletedTasks] = useState([]);

    // Handle when the user clicks the add button
    const handleTaskAdd =() =>{
        if(!newTask) return;
        
        const task ={
            id: Date.now().toString() + tasks.length + newTask ,
            name: newTask,
            completed: false
        }
        setTasks( (tasks) => [...tasks, task]);

        //reset newTask state
        setNewTask("")
    }

    //keeps track of the user input on the textbox
    const handleNewTaskInput =(e) =>{
        setNewTask(e.target.value)
    }

    // Handles deleting a task based on its id
    const updateOnTaskDelete =(id) =>{
        const newTaskList = tasks.filter( (task) =>{
            if(task.id != id){
                return task;
            }
        })
        setTasks(newTaskList);
    }

    //if the user clicks that the task is complete we
    // update the task to update its bool and update state
    // for both the task list and completed list
    const updateOnTaskComplete = (id) =>{
        const newTaskList = tasks.filter( (task) =>{
            if(task.id === id){
                task.completed = true;
                //setCompletedTasks((oldVal) => [...oldVal,task])
            }
            return task;
        })
        setTasks(newTaskList);
        
    }

    const handleTaskStateChange = (newTask) =>{
        setCompletedTasks(newTask);

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
            <ol>
                {
                    tasks.map( (taskObj) => ( 
                        <li key ={taskObj.id}>
                            <Task 
                                task={taskObj}  
                                handleDelete={updateOnTaskDelete }
                                handleComplete={updateOnTaskComplete}                            />
                        </li>
                    ))
                }
                <li>
                    <input 
                        type="text"
                        onChange={handleNewTaskInput}
                        placeholder= "Add new Task"
                        value={newTask}
                    />
                    
                    <button
                        onClick={handleTaskAdd}
                        type="button"
                    >
                        Add...
                    </button>
                </li>
            </ol>

            <div>
                <CompletedTaskList taskList={completedTasks} />
            </div>
        </>
    )
}

export default ToDoList;