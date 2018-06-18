import React from 'react'
import { connect } from 'react-redux'
import TopHeader from '../components/TopHeader'
import client from '../client'
import { FETCH_PROJECTS } from '../actions'

const TopHeaderContainer = ({lang, refetchProjects}) => {
    const headerText = `Most star ${lang.toUpperCase()} project`;
    const subHeaderText = `the data from github which the most star project about ${lang} language`
    
    return (
        <div>
            <TopHeader headerText={headerText} subHeaderText= {subHeaderText} style={{with: "500px"}}/>
            <a href="javascript:;" 
                style={{display: "inline-block", marginBottom: "15px"}} 
                onClick={() => refetchProjects(lang)}>
                click here for reload
            </a>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    lang: state.lang,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    refetchProjects: (lang) => {dispatch({
        lang: lang,
        type: FETCH_PROJECTS,
        status: 'request'
    })}
})

export default connect(mapStateToProps, mapDispatchToProps)(TopHeaderContainer)