import React from 'react';
import {Button} from 'react-bootstrap';

class MenuItem extends React.Component {

    render() {
        const MenuList = this.props.content;

        return (
            <div className="MenuItem">
                <h2>{MenuList.name}</h2>
                <p>{MenuList.type}</p>
                <Button bsStyle="primary">Submit</Button>
            </div>
        );
    }
}

export default MenuItem;
