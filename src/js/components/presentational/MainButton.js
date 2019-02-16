import React, { Component } from 'react';
import PropTypes from "prop-types";

class MainButton extends Component {
    constructor(props) {
        super(props);
      }

    handleClick() {
        this.props.fetchData(this.props.user);
    }
    render() {

        return (
            <div className="d-flex justify-content-center col-12 mt-4 pb-4">
                <button onClick={() => this.handleClick()} className="btn btn-secondary">See more</button>
            </div>
        );
    }
}

MainButton.propTypes = {
    err: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool
      ]),
    empty: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool
      ]),
    repos: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.bool
      ]),
    user: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool
      ]),
    page: PropTypes.number,
    fetchData: PropTypes.func.isRequired,
    isLastPage: PropTypes.bool
  };

export default MainButton;