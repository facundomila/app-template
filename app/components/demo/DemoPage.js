import _ from 'lodash'
import React from 'react'
import CollectionMenu from '../common/CollectionMenu'
import * as firebase from 'firebase'

class DemoPage extends React.Component {

    constructor (props) {
        super (props);
        this.state = {
            collection: {}
        }
    }

    componentWillMount() {
        const collectionRef = firebase.database().ref().child('database').child('vendor').child('zonaFranca').child('menu').child('collection')

        collectionRef.on('value', (snapshot) => {
            this.setState({
                collection: snapshot.val()
            })
        })
    }

    render() {
        const collectionData = this.state.collection;

        return (
            <div className="DemoPage">
                <h1>to avoid: {_.get(this.state, ['collection', 'extra', 'name'])}</h1>
                <h2>test</h2>
                <CollectionMenu content={collectionData} />
            </div>
        );
    }
}

export default DemoPage;
