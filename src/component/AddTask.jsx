import React, { useState } from "react";

const AddTask = ({addNewTask}) => {
    const [newTask, setNewTask] = useState("");

    // Handle when the user clicks the add button
    const handleTaskAdd = () => {
        if (!newTask) return;

        const task = {
            id: Date.now().toString() + newTask,
            name: newTask,
            completed: false
        }

        //setTasks((tasks) => [...tasks, task]);
        addNewTask(task)
        //setCompletedTasks((tasks) => [...tasks, task]);
        //reset newTask state
        setNewTask("")
    }

    //keeps track of the user input on the textbox
    const handleNewTaskInput = (e) => {
        setNewTask(e.target.value)
    }


    return (
        <div style={styles.addContainer}>
            <input
                type="text"
                onChange={handleNewTaskInput}
                placeholder="Add new Task"
                value={newTask}
            />

            <button
                onClick={handleTaskAdd}
                type="button"
                style={styles.addButton}
            >
                Add
            </button>
        </div>
    )
}

const styles = {
    addButton:{
        backgroundColor:"blue",

    },
    addContainer:{
        display:"flex",
        padding:"20px 0",
        justifyContent:"space-between"
    }
}

export default AddTask;