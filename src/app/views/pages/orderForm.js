import React, { } from "react";
import { useInput } from "react-hookedup";
import TextInput from "../components/TextInput";

const orderForm = () => {
    const { value: projectId, bindToInput: bindProjectId } = useInput( "" );
    const { value: title, bindToInput: setTitle } = useInput( "" );
    const { value: discrption, bindToInput: setDiscrption } = useInput( "" );

    const handleSubmit = ( e ) => {
        e.preventDefault();
        console.log( projectId );
        console.log( title );
        console.log( discrption );
    };
    return (
        <div>
            <div className="center">
                <h1 className="title is-1">new Order</h1>
            </div>
            <TextInput
                positon="center"
                name="projectId"
                label="projectId"
                placeholder="projectId"
                type="text"
                id="projectId"
                value={ projectId }
                bind={ bindProjectId }
            />
            <TextInput
                positon="center"
                name="title"
                label="title"
                placeholder="title"
                type="text"
                id="title"
                value={ title }
                bind={ setTitle }
            />
            <TextInput
                positon="center"
                name="discrption"
                label="discrption"
                placeholder="discrption"
                type="text"
                id="discrption"
                value={ discrption }
                bind={ setDiscrption }
            />
            <div className="center">
                <div className="field is-grouped">
                    <div className="control">
                        <button
                            className="button is-link"
                            onClick={ handleSubmit }
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default orderForm;
