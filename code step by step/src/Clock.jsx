import { useEffect, useState } from "react";

const Clock = ({color}) => {
    const [time, setTime] = useState(0);
    useEffect(() => {
        setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

    }, [])

    return (
        <div>
            <h1
                style={{ color: color , backgroundColor: '#000', width: "160px", padding: "10px", borderRadius: "5px" }}
            >{time}</h1>
        </div>
    )
}

export default Clock;