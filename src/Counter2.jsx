function Counter2({counter,data}) {
    const getCounter = () => {
        console.log("call only");
    }
    getCounter()
    return(
        <div>
            <h1>{counter}</h1>
            <h1>{data}</h1>
        </div>
    )
}

export default Counter2;