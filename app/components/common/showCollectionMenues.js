import React from 'react'

class ShowCollectionMenu extends React.Component {

  render() {
      return (
          <div>
            <h1>{this.props.children}</h1>
          </div>
      );
  }
}

export default ShowCollectionMenu;
