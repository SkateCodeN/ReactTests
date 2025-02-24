import React,{useState} from "react";

const Counter = ({initialCount}) => {
    const [count,setCount] = useState(initialCount);

    const handleDecrementClick =() =>{
        setCount((count) => count - 1);
    }
    const handleIncrementClick =() =>{
        setCount((count) => count + 1);
    }
    
    return(
        <>
            <div>
                <h3>Current Count: {count}</h3>
            </div>
            <div>
                <button type="button" onClick={handleIncrementClick}>+</button>
                <button type="button" onClick={handleDecrementClick}>-</button>
            </div>

        </>
    )
}

export default Counter;