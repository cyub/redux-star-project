import React from 'react'
import { Container } from 'semantic-ui-react'
import TopHeaderContainer from '../containers/TopHeaderContainer'
import ProjectsContainer from '../containers/ProjectContainer'

class App extends React.Component {
    render() {
        return (
            <Container>
                <TopHeaderContainer/>
                <ProjectsContainer />
            </Container>
        )
    }
}

export default App