import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux'
import { login } from '../actions/authActions.js'
import UserForm from './Forms/user'
import * as actions from '../actions/bookActions.js'


class Login extends Component {

  static contextTypes = {
    router: PropTypes.object
  }

  handleLogin = data => this.props.login({user: data}, this.context.router)

  render() {
    return(
      <div className="uk-position-center">
        <h2 className="uk-heading-line uk-text-center"><span>Log In:</span></h2>
        <UserForm action="login" onSubmit={this.handleLogin} errors={this.props.authErrors}/>
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

export const ConnectedLogin = connect(mapStateToProps, mapDispatchToProps)(Login)
// export default connect(mapStateToProps, { login })(Login)

