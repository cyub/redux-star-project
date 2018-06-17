import React from 'react'
import { Loader, List, Message } from 'semantic-ui-react'
import Project from './Project'

class Projects extends React.Component {
    static defaultProps = {
        projects:[]
    }
    
    render() {
        const { projects, status } = this.props;
        if (status == 'request') {
            return <Loader active inline='centered' >Loadding</Loader>
        } else if (status == 'request_success') {
            return (
                <div>
                <List divided relaxed>
                {
                    this.props.projects.map(function (project, index) {
                        return <Project key = {index} name={project.full_name} description={project.description} url={project.html_url}/>
                    })
                }
                </List>
                </div>
            )
        } else {
            return <Message visible>Ops! some error happen</Message>
        }
        
    }
}

export default Projects