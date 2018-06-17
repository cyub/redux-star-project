import React from 'react'
import { connect } from 'react-redux'
import TopHeader from '../components/TopHeader'
import client from '../client'
import { fetchProject } from '../actions'

const TopHeaderContainer = ({lang, refetchProjects}) => {
    const headerText = `Most star ${lang.toUpperCase()} project`;
    const subHeaderText = `the data from github which the most star project about ${lang} language`
    
    return (
        <div>
            <TopHeader headerText={headerText} subHeaderText= {subHeaderText} style={{with: "500px"}}/>
            <a href="javascript:;" 
                style={{display: "inline-block", marginBottom: "15px"}} 
                onClick={refetchProjects}>
                click here for reload
            </a>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    lang: state.lang,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    refetchProjects: () => {dispatch(fetchProject())}
})

export default connect(mapStateToProps, mapDispatchToProps)(TopHeaderContainer)