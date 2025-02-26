const Task = ({ task, handleDelete, handleComplete }) => {

    const handleDeleteClick = () => {

        handleDelete(task.id);
    }

    const handleCompleteClick = () => {
        handleComplete(task.id);
    }

    return (
        <div style={styles.task}>
            <p
                style={ 
                    task.completed ? styles.strikeText : null
                }
            >
                {task.name}
            </p>
            <div style={styles.buttonActionDiv}>
                <button
                    type="button"
                    onClick={handleDeleteClick}
                    style={ styles.deleteButton}
                >
                    X
                </button>
                <button
                    type="button"
                    onClick={handleCompleteClick}
                    style={
                        task.completed ? styles.completedTask : styles.completeButton
                    }
                >
                    C
                </button>
                
            </div>
        </div>
    )
}

const styles = {
    task: {
        display: "flex",
        justifyContent: "space-between",
        padding: "10px 0",
        alignItems:"center"

    },
    deleteButton: {
        backgroundColor: "red"


    },
    completeButton:{
        backgroundColor:"green"
    },
    buttonActionDiv:{
        display:"flex",
        gap:"10px",
        height:"40px",
        alignItems:"center",
        justifyContent:"center"
    },
    strikeText:{
        textDecoration:"line-through",
        
    },
    completedTask:{
        display:"none"
    },
    saveButton:{
        display:"block",
        backgroundColor:"yellow",
        color:"black",
        
    }
}
export default Task;