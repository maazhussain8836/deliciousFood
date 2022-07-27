import {View, Text, Image, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconOct from 'react-native-vector-icons/Octicons';
import IconIon from 'react-native-vector-icons/Ionicons';
const CustomItems = ({text, source}) => {
  return (
    <>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'space-around',
          flexDirection: 'row',
          // position:'relative',

          width: '100%',
        }}>
        <View style={{width: '20%', alignItems: 'flex-start'}}>
          <Image style={style.img} source={source} />
        </View>
        <View style={{width: '30%', top: -20}}>
          <Text style={{fontSize: 17, fontWeight: 'bold', color: '#000000'}}>
            {text}
          </Text>
        </View>
        <View
          style={{
            width: '20%',
            alignItems: 'flex-end',
            top: -30,
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 16, color: '#000000'}}>
            $12.99
          </Text>
        </View>
      </View>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'row',
          top:-20
        }}>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            marginRight: 20,

          }}>
          <Icon size={20} color="#f9b34c" name="star" />
          <Text style={{color:'#000000'}}>4.6</Text>
        </View>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <IconIon size={20} color="#575757" name="location" />
          <Text style={{color:'#3d7d7d'}}>2 km</Text>
        </View>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  img: {
    // resizeMode: 'contain',
    width: 100,
    height:80,
    
  },
  imgBg: {},
});
export default CustomItems;
