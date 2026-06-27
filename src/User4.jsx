function User4({ displayName }) {

const name="Rashmi"
    return (
        <div>
            <button onClick={()=>displayName(name)}>Display User</button>
        </div>
    )
}

export default User4;