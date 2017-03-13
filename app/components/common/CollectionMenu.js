import _ from 'lodash'
import React from 'react'
import MenuItem from '../common/MenuItem'

class CollectionMenu extends React.Component {

    render() {
        const MenuList = this.props.content.collection;
        const MenuTest = this.props.test.todos;
        console.log(MenuList, MenuTest)

        return (
            <ul className="CollectionMenu">
                {MenuList.map(data => {
                  return <MenuItem content={data} />
                })}
            </ul>
        )
    }
}

export default CollectionMenu;
