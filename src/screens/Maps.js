// import {View, Text, StyleSheet, Image} from 'react-native';
// import React, {useState} from 'react';
// import MapView from 'react-native-maps';
// import {Marker} from 'react-native-maps';
// // Map helping document
// // https://blog.logrocket.com/react-native-maps-introduction/#:~:text=)%3B-,Adding%20a%20marker%20in%20React%20Native%20Maps,marker%20in%20the%20coordinate%20prop.

// const [regions, setRegions] = useState({
//   latitude: LATITUDE,
//   longitude: LONGITUDE,
//   latitudeDelta: LATITUDE_DELTA,
//   longitudeDelta: LONGITUDE_DELTA,
// });
// const Maps = () => {
//   return (
//     <View style={styles.container}>
//       <MapView
//         style={styles.map}
//         initialRegion={{
//           latitude: 37.78825,
//           longitude: -122.4324,
//           latitudeDelta: 0.0922,
//           longitudeDelta: 0.0421,
//         }}
//         //onRegionChangeComplete runs when the user stops dragging MapView
//         onRegionChangeComplete={regions => setRegions(regions)}
//       />

//       {/* <Marker coordinate={karachiRegion}
//      pinColor="red"/> */}
//       {/*Display user's current region:*/}
//       <View style={styles.markerFixed}>
//         <Image
//           source={{
//             uri: 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png',
//           }}
//           style={{height: 35, width: 35}}
//         />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//   },
//   markerFixed: {
//     left: '50%',
//     marginLeft: -24,
//     marginTop: -48,
//     position: 'absolute',
//     top: '50%',
//     zIndex: 999,
//   },
// });
// export default Maps;


import React,{useState,useRef} from "react";
import { Pressable, StyleSheet, Text, View,Button } from "react-native";
import MapView from "react-native-maps";
import { Marker  } from "react-native-maps";
export default function Maps() {
  const mapRef = useRef(null);
  
  const initialRegion={
    latitude: 24.8607,
    longitude: 67.0011,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }
  const [region,setRegion]=useState({
    latitude: 51.5079145,
    longitude: -0.0899163,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  })

  const tokyoRegion = {
    latitude: 35.6762,
    longitude: 139.6503,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };


  const goToTokyo=()=>{
        //complete this animation in 3 seconds
    mapRef.current.animateToRegion(tokyoRegion, 1 * 1000);
  }
  const goToCurrentLoc=()=>{
    //complete this animation in 3 seconds
mapRef.current.animateToRegion(initialRegion, 1 * 1000);
}
  return (
    <View style={styles.container}>
    {/*Render our MapView*/}
      <MapView
        ref={mapRef}
        style={styles.map}
        //specify our coordinates.
        initialRegion={initialRegion}
        // region={region}
      //onRegionChangeComplete runs when the user stops dragging MapView
      onRegionChangeComplete={(region) => setRegion(region)}
      >
        <Marker coordinate={initialRegion}
        pinColor="red" />
        <Marker coordinate={tokyoRegion}
        pinColor="green" />
      {/*Display user's current region:*/}
  
  </MapView>
  <Text style={styles.text}>Current latitude: {region.latitude}</Text>
    <Text style={styles.text}>Current longitude: {region.longitude}</Text>
    <Button onPress={() => goToTokyo()} title="Go to Tokyo" />
    <Button onPress={() => goToCurrentLoc()} title="Go to Current Location" />
  </View>
    
  );
}
//create our styling code:
const styles = StyleSheet.create({
  container: {
    
    flex: 1, //the container will fill the whole screen.
    justifyContent: "flex-start",
    alignItems: "center",
    
  },
  map: {
   width:'100%',
   height:'50%'
  },
  text:{
    fontWeight:'bold',
    paddingVertical:'1%',
    width:'100%',
    textAlign:'center',
  }
});