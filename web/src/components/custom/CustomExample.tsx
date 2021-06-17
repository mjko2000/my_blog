import { memo } from "react"

interface PropType {
    onClick: (val: Number) => void
}

function CustomExample(props: PropType) {
    console.log("Rerender")
    return(
        <button
            onClick = {() => {props.onClick(Math.random())}}
        >Random</button>
    )
}

export default memo(CustomExample)