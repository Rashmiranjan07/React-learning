import { useState } from "react";

function Checkbox(){

    const [skills,setSkills]=useState([])
    
    return(
        <div>
            <h1>Select your skills</h1>
            <input type="checkbox" id="php" value="php" />
            <label htmlFor="php">PHP</label>
            <br /> <br />
            <input type="checkbox" id="js" value="JS" />
            <label htmlFor="js">Js</label>
            <br /> <br />
            <input type="checkbox" id="node" value="node" />
            <label htmlFor="node">Node</label>
            <br /> <br />
            <input type="checkbox" id="java" value="java"/>
            <label htmlFor="java">Java</label>
        </div>
    )
}

export default Checkbox;