import React, { Component } from 'react';
import Navbar from './components/Navigation/Navbar';
import Books from './components/Books'
import Home from './components/Home'
import AddBook from './components/AddBook'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './actions/bookActions.js'
import { Router, browserHistory } from 'react-router'
import Routes from './Routes.js'
import { Link } from 'react-router'
import { authenticate, authFailure } from './actions/authActions'
import { logout } from './actions/authActions'

type Props = {
  isAuthenticated: boolean,
  logout: () => void,
  authenticate: () => void,
  authFailure: () => void
}

export class App extends Component {
  
 props: Props
  
   componentDidMount() {
    const token = localStorage.getItem('token')
    if (token) {
      this.props.authenticate(token)
    } else {
      // Ping the API server in case it hasn't been used in 30 minutes and Heroku put it to sleep
      fetch('http://localhost:3200/api/v1')
    }
  }


 render() {
    return (
      <div>      
      	<Navbar />
      	<Home/>
      	{this.props.children}
      	
      </div>

    );
  }
}

function mapStateToProps(state) {
  console.log('sac', state.auth.currentUser)
  return {books: state.books, 
          isAuthenticated: state.auth.isAuthenticated,
          currentUser: state.auth.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    logout,
    authenticate,
    authFailure
  }, dispatch)
}

export const WrapperApp = connect(mapStateToProps, mapDispatchToProps)(App)