import React, {PropTypes} from 'react';
import Header from './common/Header';
import Footer from './common/Footer';

import data from '../content-data/static-data.json';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header>
          {data.header}
        </Header>
        {this.props.children}
        <Footer>
          {data.footer}
        </Footer>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;