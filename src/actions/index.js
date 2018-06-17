import client from '../client'

const FETCH_PROJECTS = 'fetch_projects';
const FETCH_PROJECTS_SUCCESS = 'fetch_projects_success';
const FETCH_PROJECTS_FAIL = 'fetch_projects_fail';

const fetchProject = () => {
    return (dispatch, getState) => {
        const { lang } = getState()
        dispatch({
            type: FETCH_PROJECTS,
            status: 'request'
        })
        client.fetchProject(lang).then((data) => {
            dispatch({
                type: FETCH_PROJECTS_SUCCESS,
                status: 'request_success',
                payload: data.items
            })
        }).catch((error) => {
            dispatch({
                type: FETCH_PROJECTS_FAIL,
                status: 'request_fail',
            })
        })
    }
}

export {
    FETCH_PROJECTS,
    FETCH_PROJECTS_SUCCESS,
    FETCH_PROJECTS_FAIL,
    fetchProject
}