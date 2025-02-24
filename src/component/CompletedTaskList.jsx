//takes is an array of objects and spits out a list

const CompletedTaskList =({taskList}) =>{

    if(!taskList) return;
    return( 
        <div>
            <div>
                <h3>Completed Tasks:</h3>
            </div>
            <div>
                <ul>
                    {
                        taskList.map( (task) => (
                            <li key={task.id}>{task.name}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default CompletedTaskList;