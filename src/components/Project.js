import React from 'react'
import { List } from 'semantic-ui-react'

class Project extends React.Component {
    render() {
        const {name , url, description} = this.props
        return (
            <List.Item>
                <List.Icon name='github' size='large' verticalAlign='middle' />
                <List.Content>
                    <List.Header as='a' href={url} target="_blank">{name}</List.Header>
                    <List.Description as='a'>{description}</List.Description>
                </List.Content>
            </List.Item>
        )
    }
}

export default Project;