import React, {PropTypes} from 'react';

class Footer extends React.Component {

    render() {
        return (
            <div className="Footer">
                {this.props.children.owner}
            </div>
        );
    }
}

Footer.propTypes = {
    children: PropTypes.object.isRequired
};

export default Footer;