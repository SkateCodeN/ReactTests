const FilterBar =() =>{

    return (
        <div style={styles.filterContainer} >
            <h5>Filters</h5>
                <ul style={styles.removeDeco}>
                    <li>
                        <button type="button">
                            A
                        </button>
                    </li>
                    <li>
                        <button type="button">
                            Ac
                        </button>
                    </li>
                    <li>
                        <button type="button">
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
