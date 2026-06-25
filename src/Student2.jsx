const student2 = ({ student }) => {
    return (
        <div>
            <h3>Students: </h3>
            {
                student.map((student) => (
                    <ul>
                        <li>
                            Name:{student.name}
                        </li>
                    </ul>
                ))
            }
        </div>
    )
}


export default Student2;