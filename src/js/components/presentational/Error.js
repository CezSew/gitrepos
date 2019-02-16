import React, { Component } from 'react';
import PropTypes from "prop-types";

class Error extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (
            <div className="alert alert-danger">
                {this.props.errorMessage}
            </div>
        );
    }
}

Error.propTypes = {
    errorMessage: PropTypes.string,
};

export default Error;