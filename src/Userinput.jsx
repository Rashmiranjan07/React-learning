import { forwardRef } from "react"

const Userinput = (props, ref) => {
    return (
        <div>
            <input type="text" ref={ref} />
        </div>
    )
}

export default forwardRef(Userinput);