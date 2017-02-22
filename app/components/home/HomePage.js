import React from 'react';
import {Jumbotron, Grid, Row, Col, Panel} from 'react-bootstrap'
import * as firebase from 'firebase'

//import dynamic from '../../content-data/dynamic-data.json';

// Make sure you swap this out with your Firebase app's config
const config = {
  apiKey: "AIzaSyBg7tWSXlOlmdE8TNJbQXu_2McmqR3R_WU",
  authDomain: "viandas-online.firebaseapp.com",
  databaseURL: "https://viandas-online.firebaseio.com",
  storageBucket: "viandas-online.appspot.com",
  messagingSenderId: "1078064900406"
}

const fb = firebase.initializeApp(config)
    .database()
    .ref();

var store;

fb.on('value', snapshot => {
  const store = snapshot.val();
    console.log(store);
});

class HomePage extends React.Component {
  render() {
      return (
          <div className="HomePage">
            <Jumbotron>
              <Grid>
                <h1>{}</h1>
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