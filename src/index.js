import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'
import { fetchProject, fetchProjectSuccess, fetchProjectFail } from './actions'
import client  from './client'

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.dispatch(fetchProject())
client.fetchProject('javascript').then((data) => {
    store.dispatch(fetchProjectSuccess(data.items))
}).catch((error) => {
    store.dispatch(fetchProjectFail())
    console.log('fetch error:' + error)
})

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'))