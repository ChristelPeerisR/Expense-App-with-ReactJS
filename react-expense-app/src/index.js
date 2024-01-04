import React from 'react'; 
import ReactDOM from 'react-dom'; 

import { legacy_createStore as createStore} from 'redux'
import { applyMiddleware } from 'redux'; 
import thunk from 'redux-thunk'; 
 
import { Provider } from 'react-redux'; 
 
import rootReducer from './reducers'; 
import App from './components/App'; 
 
const store = createStore(rootReducer, applyMiddleware(thunk)); 
 
ReactDOM.render( 
  <Provider store={store}> 
    <App /> 
  </Provider>, 
  document.getElementById('root') 
);