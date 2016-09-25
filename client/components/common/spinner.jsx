import React, { PropTypes } from "react";

const Spinner = ({hidden}) => {
    let spinnerVisibility = hidden ?
        { visibility: "none" }
        : { visibility: "block" };

    return (
        <div style={spinnerVisibility} className="spinner" />
    );
};

Spinner.propTypes = {
    hidden: PropTypes.bool
};

export default Spinner;