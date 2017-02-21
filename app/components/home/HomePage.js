import React from 'react';
import {Jumbotron, Grid, Row, Col, Panel} from 'react-bootstrap';

import dynamic from '../../content-data/dynamic-data.json';

class HomePage extends React.Component {
  render() {
    console.log('iii',dynamic);
    return (
      <div className="HomePage">
        <Jumbotron>
          <Grid>
            <h1>{dynamic.header.title}</h1>
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