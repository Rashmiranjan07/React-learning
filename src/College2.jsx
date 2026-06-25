const College2 = ({college}) => {
    return (
        <div>
            <h1>Name: {college.name} </h1>
            <ul>
                <li>
                    <h3>City: {college.city}</h3>
                </li>
                <li>
                    <h3>Website: {college.website}</h3>
                </li>
            </ul>
        </div>
    )
}
export default College2;