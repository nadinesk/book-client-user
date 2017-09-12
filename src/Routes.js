import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { WrapperApp } from './App'
import Books from './components/Books'
import { ConnectedGBooks} from './components/GBooks'
import About from './components/About'


import { ConnectedBooksInput } from './components/AddBook'
import { ConnectedFindBooks } from './components/AddGBooks'
import { ConnectedBooks } from './components/Books'
import { ConnectedSignup } from './components/Signup'
import { ConnectedLogin } from './components/Login'

import {Navbar, Nav, NavItem, Navs} from 'react-bootstrap'

// import SurfboardDetail from './components/SurfboardDetail'

import Home from './components/Home'

export default (
     <Route path="/" component={ WrapperApp }>        
            <Route path="/signup" component={ConnectedSignup} />
            <Route path="/login" component={ConnectedLogin} />
            <Route path="/books" component={ConnectedBooks} />
            <Route path="/books/new" component={ConnectedBooksInput} />
            <Route path="/books/search"  component={ConnectedFindBooks} />            
			<Route path="/about" component={About} />		
			<Route path="/gbooks" component={ConnectedGBooks} />	
    </Route>
)
