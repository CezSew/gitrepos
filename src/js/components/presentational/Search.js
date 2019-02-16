import React, { Component } from 'react';
import Input from './Input';
import PropTypes from "prop-types";

class Search extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(e) {
        e.preventDefault();
        const user = this.getUser(e); 

        this.clearInput(e);
        if(user) {
            this.props.fetchData(user, 1, ''); //arguments to reset page and repos
        }
    }

    clearInput(e) {
        e.target.elements.user.value = '';
    }

    getUser(e) {
        return e.target.elements.user.value.trim();
    }

    render() {
        return (
           <div className="col-lg-4 col-md-8 col-sm-12 p-0">
                <form className="d-flex justify-content-between" onSubmit={this.handleSubmit}>
                    <Input />
                    <button className="btn btn-primary">Wyszukaj</button>
                </form>
           </div>
        );
    }
}

Search.propTypes = {
    fetchData: PropTypes.func.isRequired,
    handleSearch: PropTypes.func,
  };

export default Search;