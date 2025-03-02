import React from "react";
import useTodoList from "../hooks/useTodoList";
import Task from "./Task";
import FilterBar from "./FilterBar";
import AddTask from "./AddTask";

const TodoList =() => {
    const {
        tasks, 
        filteredTasks, 
        addTask, 
        deleteTask, 
        toggleTaskComplete,
        filter, 
        setFilter
    } = useTodoList();

    return (
        <>
            <h2>Task Manager</h2>
            <FilterBar currentFilter={filter} onFilterChange={setFilter} />

            <ul>
                {filteredTasks.map((task) => (
                    <li key={task.id}>
                        <Task 
                            task={task}
                            handleComplete={() => toggleTaskComplete(task.id)}
                            handleDelete={() => deleteTask(task.id)}
                        />
                    </li>
                ))}
            </ul>
            <AddTask addNewTask={addTask} />
        </>
    )
}

export default TodoList;