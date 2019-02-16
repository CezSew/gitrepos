import React, { Component } from 'react';
import Repository from './Repository';

class Repositories extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (
            <section>
                <div className="mt-5 mb-5 col-12">
                Displaying repos of <strong>{this.props.user}</strong>
                </div>
                <Repository repos={this.props.repos}/>
            </section>
        );
    }
}

export default Repositories;