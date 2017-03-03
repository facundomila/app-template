import _ from 'lodash'
import React from 'react'
import MenuItem from '../common/MenuItem'

class CollectionMenu extends React.Component {

    render () {
        return (<p>{this.props.content.extra.price}</p>)
    }
}

export default CollectionMenu;
