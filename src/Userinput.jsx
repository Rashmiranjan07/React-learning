/* This beongs to old method */
// import { forwardRef } from "react"

// const Userinput = (props, ref) => {
//     return (
//         <div>
//             <input type="text" ref={ref} />
//         </div>
//     )
// }

// export default forwardRef(Userinput);
// in react 19 we donnot write the forwardRef things 

const Userinput = (props) => {
    return (
        <div>
            <input type="text" ref={props.ref} />
        </div>
    )
}

export default Userinput;