import _ from 'lodash'
import React from 'react'
import {Jumbotron, Grid, Row, Col, Panel} from 'react-bootstrap'
import * as firebase from 'firebase'
//import dynamic from '../../content-data/dynamic-data.json';

// Make sure you swap this out with your Firebase app's config
const config = {
  apiKey: 'AIzaSyBg7tWSXlOlmdE8TNJbQXu_2McmqR3R_WU',
  authDomain: 'viandas-online.firebaseapp.com',
  databaseURL: 'https://viandas-online.firebaseio.com',
  storageBucket: 'viandas-online.appspot.com',
  messagingSenderId: '1078064900406'
};
firebase.initializeApp(config);

class HomePage extends React.Component {

  constructor() {
    super();
    this.state = {
      store: ''
    }
  }

  componentWillMount() {
    const titleRef = firebase.database().ref().child('database').child('vendor').child('zonaFranca').child('menu').child('collection');

    titleRef.on('value', (snapshot) => {
      this.setState({
        store: snapshot.val()
      })
    })
  }

  render() {

      return (
          <div className="HomePage">
            <Jumbotron>
              <Grid>
                <h1>{_.get(this.state, ['store', [0], 'name'])}</h1>
              </Grid>
            </Jumbotron>
            <Grid>
              <Row>
                <Col sm={6}>
                  <Panel header="Panel 1">
                    <p>Content A</p>
                    <p>Content B</p>
                  </Panel>
                </Col>
                <Col sm={6}>
                  <Panel header="Panel 2">
                    <p>Content A</p>
                    <p>Content B</p>
                  </Panel>
                </Col>
              </Row>
            </Grid>
          </div>
      );
  }
}

export default HomePage;
