import React from 'react';
import {Button} from 'react-bootstrap';

class MenuItem extends React.Component {

    render() {
        console.log(this.props.content);
        return (
            <div className="MenuItem">
                <h2>{this.props.content.extra.name}</h2>
                <p>{this.props.content.extra.description}</p>
                <Button bsStyle="primary">Pedir</Button>
            </div>
        );
    }
}

export default MenuItem;
