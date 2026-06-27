function User4({ displayName, name }) {

    return (
        <div>
            <button onClick={() => displayName(name)}>Display User</button>
        </div>
    )
}

export default User4;