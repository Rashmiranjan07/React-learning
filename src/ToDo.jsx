function ToDo() {


    function callFun() {
        alert("function called")
    }

    return (
        <div>
            <h1>Rashmiranjan ToDo</h1>

            <ul>
                <li>Invent new Traffic lighst
                </li>
                <li>Rehearse a movie scene</li>
                <li>Improve the spectrum technology</li>
            </ul>
            <button onClick={callFun}>Click me</button>
        </div>

    );
}

export default ToDo