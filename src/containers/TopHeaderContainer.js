import React from 'react'
import { connect } from 'react-redux'
import TopHeader from '../components/TopHeader'
import client from '../client'
import { fetchProject, fetchProjectSuccess, fetchProjectFail } from '../actions'

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
    refetchProjects: (lang) => {
        dispatch(fetchProject())
        client.fetchProject(lang).then((data) => {
            dispatch(fetchProjectSuccess(data.items))
        }).catch((error) => {
            dispatch(fetchProjectFail())
            console.log('fetch error:' + error)
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(TopHeaderContainer)