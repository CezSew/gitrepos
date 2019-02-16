import React, { Component } from 'react';
import Repositories from './Repositories';
import MainButton from './MainButton';
import Error from './Error';
import PropTypes from "prop-types";

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const isLastPage = this.props.isLastPage;
        const repos = (this.props.repos) ? this.props.repos : '';
        const error = this.props.err;
        let message, button, errorComponent, repositories;

        if(!isLastPage && repos.length) {
            button = <MainButton {...this.props}/>;
        }
        if (repos && !error) {
            repositories =  <Repositories {...this.props}/>;
        }

        if(this.props.err) {
            message= this.props.err;
            errorComponent= <Error errorMessage={message} />;
        }
        return (
            <main className="pt-3">
                {errorComponent}
                {repositories}
                {button}
            </main>
        );
    }
}

Main.propTypes = {
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

export default Main;