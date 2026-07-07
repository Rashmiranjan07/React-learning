import Student2 from "./Student2";

const College2 = ({ college }) => {
    return (
        <div style={{
            backgroundColor: "#ccc",
            padding: "20px",
            borderBottom: "2px solid #000",
            margin: "20px",
            borderRadius: "10px"

        }
        }>
            <h1>Name: {college.name} </h1>
            <ul>
                <li>
                    <h3>City: {college.city}</h3>
                </li>
                <li>
                    <h3>Website: {college.website}</h3>
                </li>
                <li>
                    <Student2 student={college.student} />
                </li>
            </ul>
        </div>
    )
}
export default College2;