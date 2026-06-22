/* Props in React Js */

function Props({user}) {
    return (
        <div>
            <hr />
           <h2>Name:{user.name}</h2>
            <h2>Age:{user.age}</h2>
            <h2>Email:{user.email}</h2>
        </div>
    )
}

export default Props;