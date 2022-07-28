import React, {useState, useRef, useEffect} from 'react';
import {Image, TextInput, TouchableOpacity} from 'react-native';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {Marker} from 'react-native-maps';
import MapView from 'react-native-maps';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Icon from 'react-native-vector-icons/FontAwesome5';

const NehaMap = () => {
  const mapRef = useRef();
  const area = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
  const [region, setRegion] = useState(area);

  const setArea = e => {
    console.log(e);

    setRegion(e);
  };
  const defaultState = () => {
    setRegion(area);
    mapRef.current.animateToRegion(area);
  };
  useEffect(() => {
    console.log(region);
  }, [region]);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        scrollEnabled={true}
        ref={mapRef}
        initialRegion={region}
        onRegionChangeComplete={e => setArea(e)}></MapView>

      <View style={{position: 'absolute', top: 10, width: '100%'}}>
        <GooglePlacesAutocomplete
          placeholder="Enter Location"
          minLength={2}
          autoFocus={false}
          returnKeyType={'default'}
          fetchDetails={true}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            this.getPysicalAddress(data);
          }}
          query={{
            key: 'AIzaSyDpjC5dmFxhdUHi24y0ZH6PGD_NhOLFCMA',
            language: 'en',
          }}
          styles={{
            textInput: {
              backgroundColor: '#4D4D4D',
              marginLeft: 0,
              marginHorizontal: 90,
              borderRadius: 6,

              height: 32,
              color: '#5d5d5d',
              fontSize: 17,
              color: 'white',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowOpacity: 0.32,
              shadowRadius: 5.46,

              elevation: 9,
            },

            
            predefinedPlacesDescription: {
              color: '#000',
            },
            description: {
              color: 'black',
            },
            container: {
              flex: 1,
              marginLeft: 10,
            },
          }}
        />
      </View>
      {/*     
      <Marker coordinate={area}
      draggable 
      onDragEnd={(e) =>setRegion(e.nativeEvent.cordinate)}
      /> */}
      <View style={styles.markerFixed}>
        <Image
          source={{
            uri: 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png',
          }}
          style={{height: 35, width: 35}}
        />
      </View>

      <View
        style={{
          borderColor: 'black',
          borderWidth: 2,
          width: 30,
          height: 30,
          margin: 20,
          marginLeft: 80,
        }}>
        <TouchableOpacity onPress={() => defaultState()}>
          <Icon name="map-marked" color="brown" size={40} />
        </TouchableOpacity>
      </View>
      <View style={{backgroundColor: 'black', width: 350}}>
        <Text style={{color: 'white', fontSize: 20}}>
          {' '}
          Latitude: {region.latitude}{' '}
        </Text>
        <Text style={{color: 'white', fontSize: 20}}>
          {' '}
          Longitude: {region.longitude}{' '}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1, //the container will fill the whole screen.
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'relative',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  markerFixed: {
    left: '50%',
    marginLeft: -24,
    marginTop: -48,
    position: 'absolute',
    top: '50%',
  },
});

export default NehaMap;
