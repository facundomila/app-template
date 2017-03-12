import React from 'react';
import {Button} from 'react-bootstrap';

class MenuItem extends React.Component {

    render() {
        const content = this.props.content;
        const key = this.props.key;
        console.log('cccc',content, key)
        return (
            <div className="MenuItem">
                <h2>{content}</h2>
                <p>{key}</p>
                <Button bsStyle="primary">Pedir</Button>
            </div>
        );
    }
}

export default MenuItem;
