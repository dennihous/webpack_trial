import React, { Component } from "react";
import ReactDOM from "react-dom";
class MyForm extends Component {
    constructor() {
        super();
    this.state = {
       value: ""
    };
    this.onInputChange = this.onInputChange.bind(this);
}
onInputChange(event) {
   this.setState({ value: event.target.value })
}
render() {
        return (
            <form>
                <input type="text"
                    value={this.state.value}
                    onChange={this.onInputChange}
                />
                <h1>{this.state.value}</h1>
            </form>
        );
    }
}
export default MyForm;