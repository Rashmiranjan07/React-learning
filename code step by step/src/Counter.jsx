import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0)
    const [rCount, setrCount] = useState(10)
    return (
        <div>
            <h1>Counter:{count}</h1>
            <h2>Reverse Counter:{rCount}</h2>
            <button onClick={() => setCount(count + 1)}> Update Counter </button>
            <button onClick={() => setrCount(rCount - 1)}> Reverse Counter </button>

        </div>
    )
}

export default Counter;