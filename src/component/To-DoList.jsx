import React, { useState } from "react";
import Task from './Task';
import CompletedTaskList from "./CompletedTaskList";
import FilterBar from "./FilterBar";

const testdata = [
    {id:"1234", name: "task1", completed:false},
    {id:"21234", name: "task2", completed:false},
    {id:"31341", name: "task3", completed:false},
    {id:"4134", name: "task4", completed:false},
]
const ToDoList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] =useState("");
    const [completedTasks, setCompletedTasks] = useState([]);

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

    const handleNewTaskInput =(e) =>{
        setNewTask(e.target.value)
    }

    const updateOnTaskDelete =(id) =>{
        const newTaskList = tasks.filter( (task) =>{
            if(task.id != id){
                return task;
            }
        })
        setTasks(newTaskList);
    }

    const updateOnTaskComplete = (id) =>{
        const newTaskList = tasks.filter( (task) =>{
            if(task.id === id){
                task.completed = true;
                setCompletedTasks((oldVal) => [...oldVal,task])
            }
            return task;
        })
        setTasks(newTaskList);
        
    }
    if (!tasks) return <p>Loading Tasks...</p>

    return (
        <>
            <h3>Your Tasks:</h3>
            <div>
                <FilterBar />
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