import _ from 'lodash'
import React from 'react'
import CollectionMenu from '../common/CollectionMenu'
import * as firebase from 'firebase'

class DemoPage extends React.Component {

    constructor (props) {
        super (props);
        this.state = {
            store: ''
        }
    }

    componentWillMount() {
        const collectionRef = firebase.database().ref().child('database').child('vendor').child('zonaFranca').child('menu')

        collectionRef.on('value', (snapshot) => {
            this.setState({
                store: snapshot.val()
            })
        })
    }

    render() {
        const MenuList = _.get(this.state, ['store']);
        const MenuTest = {
          todos: [
            {
              id: 1,
              name: 'Meeting at work'
            },
            {
              id: 2,
              name: 'Bring kids to school'
            },
            {
              id: 3,
              name: 'Food shopping'
            }
          ]
        };

        return (
            <div className="DemoPage">
                <h1>to avoid: {_.get(this.state, ['store', 'collection', [2], 'price'])}</h1>
                <h2>test: </h2>
                <CollectionMenu content={MenuList} test={MenuTest} />
            </div>
        );
    }
}

export default DemoPage;
