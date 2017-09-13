import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/bookActions.js'

import { Link } from 'react-router'
import BookDetail from './BookDetail'
import BooksList from './BooksList'
import { Button, ButtonToolbar, Grid, Row, Col, Clearfix } from 'react-bootstrap'

import './Books.css'

export default class Books extends Component {

    constructor(props) {
        super(props)

        this.state = {
          books: []
        }
    }

    componentDidMount() {      
       
       const currentUserId = this.props.currentUser.id
       this.props.actions.fetchBooks(currentUserId)
       debugger

    }

    render() {
debugger
      console.log('this.props.books', this.props.books)
      return (
        <Grid>
          <Row className="show-grid">
            <Col className="first_col" md={6} > <h3>All Book Crowd Titles </h3> </Col></Row>     
            <br />                           
          <Row className="show-grid">
            <Col className="first_col1" md={6} >                               
              <Link to="/books/new">Add A Book  </Link>                    
               
              {this.props.books ? <BooksList books={this.props.books}/> : <h4>...loading</h4>}                    
            </Col>                                           
          </Row>
        </Grid>
      )
    }
}

function mapDispatchToProps(dispatch){
  return {actions: bindActionCreators(actions, dispatch)}
}

function mapStateToProps(state){
  debugger
  return { books: state.books.books, 
   currentUser: state.auth.currentUser,
    token: state.auth.token}
}

export const ConnectedBooks = connect(mapStateToProps, mapDispatchToProps)(Books)

