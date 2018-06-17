import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import reducers from './reducers'
import { fetchProject } from './actions'
import client  from './client'

const store = createStore(reducers,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk));

store.dispatch(fetchProject())
ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'))