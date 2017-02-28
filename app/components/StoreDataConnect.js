import _ from 'lodash'
import React from 'react'
import * as firebase from 'firebase'

// Make sure you swap this out with your Firebase app's config
const config = {
  apiKey: 'AIzaSyBg7tWSXlOlmdE8TNJbQXu_2McmqR3R_WU',
  authDomain: 'viandas-online.firebaseapp.com',
  databaseURL: 'https://viandas-online.firebaseio.com',
  storageBucket: 'viandas-online.appspot.com',
  messagingSenderId: '1078064900406'
};
firebase.initializeApp(config);

const collection = firebase.database().ref().child('database').child('vendor').child('zonaFranca').child('menu').child('collection')

    collection.on('value', (snapshot) => {
        const dataCollection = snapshot.val()
      })
    })
    console.log('ppp',dataCollection)
