import {
    FETCH_PROJECTS,
    FETCH_PROJECTS_SUCCESS,
    FETCH_PROJECTS_FAIL
} from '../actions'

const defaultState = {
    lang: 'javascript',
    projects: [],
    status: 'default'
}

const reducer = (state = defaultState, action) => {
    switch(action.type) {
        case FETCH_PROJECTS:
            return Object.assign({}, state, {
                status: action.status,
            })
        case FETCH_PROJECTS_SUCCESS:
            return Object.assign({}, state, {
                status: action.status,
                projects:action.payload
            })
        case FETCH_PROJECTS_FAIL:
            return Object.assign({}, state, {
                status: action.status,
            })
        default:
            return state
    }
}

export default reducer

