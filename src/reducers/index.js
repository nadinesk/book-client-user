
import { combineReducers } from 'redux';
import booksReducer from './books_reducer';
import gbooksReducer from './gbooks_reducer';
import auth from './auth_reducer';
import { reducer as form } from 'redux-form'



const rootReducer =  combineReducers({      
  form,
  auth, 
  books: booksReducer,
  booksFound: gbooksReducer, 
 
});


export default rootReducer;