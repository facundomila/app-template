import _ from 'lodash'
import React from 'react'
import MenuItem from '../common/MenuItem'

class CollectionMenu extends React.Component {

    render() {
        //const arratTest = [1,2,3]
        const MenuTest = this.props.content;
        console.log('aaaa', MenuTest)
        return (
            <ul className="CollectionMenu">
                {MenuTest.map(todo => {
                  return <li todo={todo} key={todo.id}>{todo.name}</li>
                })}
            </ul>
        )
    }

    
}

export default CollectionMenu;
