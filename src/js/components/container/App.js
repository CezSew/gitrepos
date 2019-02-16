import React, { Component } from 'react';
import Header from '../presentational/Header';
import Footer from '../presentational/Footer';
import Main from '../presentational/Main';

/*
*   Github Repos listing app
*   
*   @desc
*   Uses Github API to show repositiories of a given user.
*   Showing up to 20 repositories at once, uses pagination.
*
*   @author Cezary Seweryński
*
*/    


class App extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
          user: '',
          err: '',
          empty: '',
          oldRepos: '',
          page: 1,
          isLastPage: false
        };

        this.fetchData = this.fetchData.bind(this);

        this.state = this.initialState;
    }

    fetchData(user, page = this.state.page, repos = this.state.repos) {
      let callback
      const url = `http://api.github.com/users/${user}/repos?page=${page}&per_page=20`;
      fetch(url)
      .then(results => this.handleRequestStatus(results))
      .then(data => callback = data)
      .then(() => {
        const repositories = this.setRepos(page, callback, this.state.repos);
        this.setState({
            err: this.isCallbackEmpty(callback) ? "No repos found" : false, 
            empty: this.isCallbackEmpty(callback),
            repos: this.isUserFound(callback.message) ? repositories : '',
            user: this.isCallbackEmpty(callback) ? '' : user,
            oldRepos: this.isCallbackEmpty(callback) ? '' : this.state.repos,
            page: this.isCallbackEmpty(callback) ? 1 : page + 1,
            isLastPage: this.isCallbackEmpty(callback) ? false : callback.length < 20
        });
      }).catch(err => {
          this.setState({err});
      });
    }

    // handle 404
    handleRequestStatus(callback) {
      if(!callback.ok) {
        return false;
      } else {
        return callback.json();
      }
    }

    isCallbackEmpty = callback => { 
      if(callback) {
        return callback.length ? false : true 
      } else {
        return true;
      }
    };

    setRepos(page, callback, prevRepos) {
      return this.isNotFirstPage(page) ? this.mergeReposArray(callback, prevRepos) : callback;
    }

    isNotFirstPage(page) {
      return page > 1;
    }

    isFirstPage = page => page > 1;

    isUserFound = message => {
      return message !== "Not found";
    }
    /*
    *   Connect reponse with previous responses into a new array
    */    
    mergeReposArray = (arr1, arr2) => { 
      let oldRepos = arr2;
      let newRepos = arr1;
      Array.prototype.push.apply(oldRepos,newRepos);
      
      return oldRepos;
    };

    render() {
      return (
        <div className="wrapper bg-light app-wrapper">
          <Header handleSearch={this.handleSearch} fetchData={this.fetchData}/>
          <div className="container">
            <Main {...this.state} fetchData={this.fetchData}/>
          </div>
          <Footer />
        </div>
      );
    }
  }
  
  export default App;