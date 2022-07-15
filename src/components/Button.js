import React from "react";

export function Button(props) {
    const { label = "Default", handleClick} = props;
    return <button onClick={() => console.log('clicked.')}>{props.label}</button>;
}
