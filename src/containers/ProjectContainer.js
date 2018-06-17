import React from 'react'
import { connect } from 'react-redux'
import Projects from '../components/Projects'

const mapStateToProps = (state, ownProps) => ({
    projects: state.projects,
    status: state.status,
})

export default connect(mapStateToProps)(Projects)