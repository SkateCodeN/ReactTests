const FilterBar =({ tasks,handleStateChange}) =>{

     // when the user clicks the filter section for displaying all the completed 
    //tasks
    const getCompletedTasks = () =>{
        const completedTasks = tasks.filter( (task) => task.completed);
        handleStateChange(completedTasks);
    }

    //display all the active only aka the ones where its not completed
    const getActiveTasks= () => {
        const activeTasks = tasks.filter( (task) => !task.completed);
        handleStateChange(activeTasks);
    }

    // Get all the tasks
    const getAllTasks = () => {
        handleStateChange(tasks);
    }
    return (
        <div style={styles.filterContainer} >
            <h5>Filters</h5>
                <ul style={styles.removeDeco}>
                    <li>
                        <button 
                            type="button"
                            //onClick={handleAllClick} 
                            onClick={getAllTasks}
                        >
                            A
                        </button>
                    </li>
                    <li>
                        <button 
                            type="button"
                            //onClick={handleActiveClick}
                            onClick={getActiveTasks}
                        >
                            Ac
                        </button>
                    </li>
                    <li>
                        <button 
                            type="button"
                            //onClick={handleCompleteClick}
                            onClick={getCompletedTasks}
                        >
                            C
                        </button>
                    </li>
                </ul>
        </div>
    )
}

const styles ={
    removeDeco: {
        display:"flex",
        gap:"10px",
        justifyContent:"center",
        listStyleType:"none"
    },
    filterContainer:{
        display:"flex",
        gap:"5px",
        alignItems:"center"
    }
}



export default FilterBar;
