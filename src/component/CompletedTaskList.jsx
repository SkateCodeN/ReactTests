//takes is an array of objects and spits out a list
import Task from "./Task";

const CompletedTaskList =({taskList, handleDelete, handleComplete}) =>{

    if(!taskList) return;
    return(
        <div>
            <div>
                <h3>Tasks:</h3>
            </div>
            <div>
                <ul>
                    {
                        taskList.map( (task) => (
                            //<li key={task.id}>{task.name}</li>
                            <li>
                                <Task 
                                    task={task}
                                    handleComplete={handleComplete}
                                    handleDelete={handleDelete}
                                />

                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default CompletedTaskList;