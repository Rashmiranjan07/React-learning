import { useEffect } from "react";

const Counter2 = ({ count }) => {
    const handleCounter = () => {
        console.log("handleCounter called")
    }

    useEffect(() => {
        handleCounter();
    }, [])

    return
    (
        <div>
            <h1>Counter Value {count}</h1>
        </div>
    )
}

export default Counter2;