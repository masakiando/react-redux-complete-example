import PropTypes from "prop-types";

const { number, shape, string } = PropTypes;

export default shape( {
    id: number.isRequired,
    project_name: string.isRequired,
    title: string.isRequired,
    status: string.isRequired,
    tat: number.isRequired,
} );
