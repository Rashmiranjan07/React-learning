const User3 = ({ data }) => {
    return (
        <div style={{
            border: "1px solid green",
            padding: "10px",
            margin: "10px",
            width: "400px",
        }
        }>
            <h3>Name: <span style={{ color: 'green' }}>{data.name}</span> </h3>
            <h3>Age: <span style={{ color: 'red' }}>{data.age}</span> </h3>
            <h3>Email: <span style={{ color: 'blue' }}>{data.email}</span> </h3>
        </div>
    )
}

export default User3;