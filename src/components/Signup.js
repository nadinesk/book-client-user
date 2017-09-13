import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux'
import { signup } from '../actions/authActions.js'
import UserForm from './Forms/user'
import * as actions from '../actions/bookActions.js'


class Signup extends Component {

  static contextTypes = {
    router: PropTypes.object
  }

  handleSignup = data => this.props.signup({user: data}, this.context.router)

  render() {
    return(
      <div className="uk-position-center">
        <h2 className="uk-heading-line uk-text-center"><span>Sign Up:</span></h2>
        <UserForm action="signup" onSubmit={this.handleSignup} errors={this.props.authErrors}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    authErrors: state.auth.errors
  }
}

function mapDispatchToProps(dispatch){
  
  return {actions: bindActionCreators(actions, dispatch)}
}

export const ConnectedSignup = connect(mapStateToProps, { signup })(Signup)