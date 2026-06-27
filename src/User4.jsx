function User4(){

    const displayName = (name) => {
        alert(name)
    }
    return(
        <div>
            <button onClick={()=>displayName("Rashmi")}>Display User</button>
        </div>
    )
}

export default User4;