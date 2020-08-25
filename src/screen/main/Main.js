import React from 'react';
import { View, StyleSheet, } from 'react-native';
import MapView from 'react-native-maps';
// import { Container } from './styles';

const main = () => {
  return(

    <MapView style={styles.mapa}>

    </MapView>

  );
}

const styles = StyleSheet.create({
    mapa:{
        flex:1
    }
})
 



export default main;