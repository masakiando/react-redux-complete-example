import React from "react";
import PropTypes from "prop-types";

const TextInput = ( {
    positon,
    name,
    label,
    placeholder,
    type,
    id,
    value,
    bind,
} ) => (
    <div className={ positon }>
        <label htmlFor={ label }>
            { label }
            <div className="field">
                <div className="control">
                    <input
                        name={ name }
                        placeholder={ placeholder }
                        className="input"
                        type={ type }
                        id={ id }
                        value={ value }
                        { ...bind }
                    />
                </div>
            </div>
        </label>
    </div>
);
TextInput.defaultProps = {
    type: "text",
};

const { object, string } = PropTypes;

TextInput.propTypes = {
    positon: string.isRequired,
    name: string.isRequired,
    placeholder: string.isRequired,
    value: string.isRequired,
    id: string.isRequired,
    bind: object.isRequired,
    label: string.isRequired,
    type: PropTypes.oneOf( [ "text", "number", "password" ] ),
};

export default TextInput;
