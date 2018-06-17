import React from 'react'
import { Header } from 'semantic-ui-react'

class TopHeader extends React.Component {
    render() {
        return (
            <Header as='h2'>
                {this.props.headerText}
                <Header.Subheader>{this.props.subHeaderText}</Header.Subheader>
            </Header>
        )
    }
}
export default TopHeader