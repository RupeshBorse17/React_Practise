import React from 'react'

const Child = React.memo(
    (props) => {
    console.log("first render");
        return (
        <div>
        <button onClick={props.handleclick}>
         {props.buttonname}
        </button>
        </div>
    )
}
)

export default React.memo(Child);
