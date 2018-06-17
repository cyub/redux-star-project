const FETCH_PROJECTS = 'fetch_projects';
const FETCH_PROJECTS_SUCCESS = 'fetch_projects_success';
const FETCH_PROJECTS_FAIL = 'fetch_projects_fail';

function fetchProject() {
    return {
        type: FETCH_PROJECTS,
        status: 'request'
    }
}

function fetchProjectSuccess(list) {
    return {
        type: FETCH_PROJECTS_SUCCESS,
        status: 'request_success',
        payload: list
    }
}

function fetchProjectFail() {
    return {
        type: FETCH_PROJECTS_FAIL,
        status: 'request_fail',
    }
}

export {
    FETCH_PROJECTS,
    FETCH_PROJECTS_SUCCESS,
    FETCH_PROJECTS_FAIL,
    fetchProject,
    fetchProjectSuccess,
    fetchProjectFail
}