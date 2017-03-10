import _ from 'lodash'
import React from 'react'
import MenuItem from '../common/MenuItem'

class CollectionMenu extends React.Component {

    render() {
        const content = this.props.content;
        return (
            <div>
                {content.map(this.renderMenuItem)}
            </div>
        )
    }

    renderMenuItem(conte, index) {
        var x = conte;
        return <div>{x}</div>

    }
}

export default CollectionMenu;
