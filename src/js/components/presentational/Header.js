import React, { Component } from 'react';
import Search from './Search';
import PropTypes from "prop-types";

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
           <div className="align-items-center p-3 px-md-4 bg-white border-bottom shadow-sm">
                <div className="container justify-content-between d-flex align-items-center flex-wrap">
                    <h1 className="display-4 d-flex align-items-end flex-wrap">GitHub <span className="lead">repos search</span></h1>
                    <Search handleSearch={this.props.handleSearch} fetchData={this.props.fetchData} resetState={this.props.resetState}/>
                </div>
           </div>
        );
    }
}

Header.propTypes = {
    fetchData: PropTypes.func.isRequired,
    handleSearch: PropTypes.func,
};


export default Header;