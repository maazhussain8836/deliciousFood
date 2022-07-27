import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps';
import {Marker}   from "react-native-maps";
// Map helping document
// https://blog.logrocket.com/react-native-maps-introduction/#:~:text=)%3B-,Adding%20a%20marker%20in%20React%20Native%20Maps,marker%20in%20the%20coordinate%20prop.

const karachiRegion ={
    latitude: 35.6762,
    longitude: 139.6503,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  }
const Maps = () => {
  return (
    <>
    <MapView 
    initialRegion={karachiRegion}
    style={styles.mapStyle}>

    <Marker coordinate={karachiRegion}
     pinColor="red"/>
     </MapView>
     </>
  )
}
const styles=StyleSheet.create({
    mapStyle:{
        width:'100%',
        height:'100%'
    }
})
export default Maps