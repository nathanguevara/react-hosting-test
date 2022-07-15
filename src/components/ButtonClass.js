import React from "react";

export class ButtonClass extends React.Component {
    contructor(props) {
        super(props);
    }

    render() {
        const { label = "Default", handleClick = () => console.log(:"I am default"),
        return <button onClick={this.props.handleClick}>{this.props</button>
    }
}