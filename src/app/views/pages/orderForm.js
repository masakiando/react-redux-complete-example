import React, { Component } from "react";

class orderForm extends Component {
    constructor( props ) {
        super( props );
        this.state = { text: "TEST" };
    }

    render() {
        return (
            <div>
                <div>{ this.state.text }</div>
                <div className="center">
                    <h1 className="title is-1">new Order</h1>
                </div>
                <div className="center">
                    <label htmlFor="username" className="has-text-danger">
                         Title
                        <div className="field">
                            <div className="control">
                                <input
                                    className="input is-primary"
                                    type="text"
                                    placeholder="Primary input"
                                    id="username"
                                    name="username"
                                />
                            </div>
                        </div>
                    </label>
                </div>
                <div className="center">
                    <button className="button">
                       save Order
                    </button>
                </div>
            </div>
        );
    }
}

export default orderForm;
