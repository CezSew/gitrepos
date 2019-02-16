import React, { Component } from 'react';


class Repository extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const repos = Object.entries(this.props.repos);
        return (
            <section className="d-flex align-items-stretch row">
                {repos.map((repo, i) => {
                    return (
                        <div key={i} className="d-flex align-items-stretch col-md-4 col-lg-3">
                            <div className="mb-4 card shadow-sm bg-white rounded w-100">
                                <div className="card-body">
                                    <a href={repo[1].html_url}>
                                        <h5>{repo[1].name}</h5> 
                                    </a>
                                    <p><b>Language:  </b>{repo[1].language}</p>
                                    <p><b>Watchers:  </b>{repo[1].watchers}</p>
                                    <p><b>Size:  </b>{repo[1].size}KB</p>
                                    <p><b>Description:  </b>{repo[1].description}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </section>
        );
    }
}

export default Repository;