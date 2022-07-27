import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ImageBackground,
} from 'react-native';
export const SLIDER_WIDTH = Dimensions.get('window').width + 0;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.5);

const CarouselCardItem = ({item, index}) => {
  return (
    <View style={styles.container} key={index}>
      <ImageBackground
        borderRadius={13}
           source={item.imgUrl}
        // source={{uri: }}
        style={styles.image}
      />

      <Text style={styles.header}>{item.title} </Text>

      <ImageBackground />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 13,
    width: ITEM_WIDTH,
    marginTop: 10,
    marginLeft:-76,
   
  },
  image: {
    width: ITEM_WIDTH,
    height: 190,
    resizeMode: 'contain',
    borderRadius: 13,
    opacity:0.8,
    backgroundColor:'#000'
  },
  header: {
    color: '#fff',
    fontSize: 15,
    left:-10,
    fontWeight: 'bold',
    paddingLeft: 20,
    top:0,
    borderRadius: 13,
  },
  body: {
    color: '#222',
    fontSize: 18,
    paddingLeft: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default CarouselCardItem;
