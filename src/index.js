import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
//import thunk from 'redux-thunk';
import reducers from './reducers'
import { FETCH_PROJECTS, fetchProject } from './actions'
import client  from './client'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducers,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga)

store.dispatch({type: FETCH_PROJECTS, ...store.getState()})

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'))