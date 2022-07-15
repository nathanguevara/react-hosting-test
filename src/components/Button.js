import React from "react";

export function Button(props) {
    return <button onClick={() => console.log('clicked.')}>{props.label}</button>;
}
