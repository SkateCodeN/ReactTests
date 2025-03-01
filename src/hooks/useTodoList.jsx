import {useState} from 'react';

const useTodoList = (initialTasks = []) =>{

    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState('all');

    const addTask =(task) => {
        setTasks( (prev) => [...prev, task])
    }

    const toggleTaskComplete = (id) => {
        setTasks(prev => prev.map((task) => 
            task.id === id ? {...task, completed: !task.completed} : task
        ))
    }

    const deleteTask = () => {
        setTasks((prev) => prev.filter( (task) => task.id !== id));
    }

    const filteredTasks = tasks.filter((task) => {
        if(filter === "all") return true;
        if(filter === "active") return !task.completed;
        if(filter === "completed") return task.completed;
        return true;
    });

    return {tasks, filteredTasks, addTask, deleteTask, toggleTaskComplete, filter, setFilter};
}

export default useTodoList;
