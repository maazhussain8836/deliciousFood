import {View, Text,StyleSheet} from 'react-native';
import React from 'react';
import CustomLocation from '../components/CustomLocation';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Location2 = () => {
  return (
    <View style={{flex: 1}}>
      <View>
        <CustomLocation
          placeholder={'Search Location'}
          color={'#c2c2c2'}
          icon={false}
        />
      </View>
      <View>
        <Icon
          style={{
            position: 'absolute',
            top: -110,
            left: 300,
            paddingLeft: 10,
          }}
          size={30}
          color="#000"
          name="close"
        />
      </View>
      <View
        style={{...style.addressStyle,marginTop:'10%'}}>
        <View>
          <IconMaterial name="my-location" size={20} color="#2c7873" />
        </View>
        <View style={{marginLeft: 10}}>
          <Text style={{color: '#000', fontSize:18, fontWeight: 'bold'}}>Downtown West</Text>
          <Text style={{color:'#c2c2c2'}}>St.Louis MQ, USA</Text>
        </View>
      </View>
      

      <View
        style={style.addressStyle}>
        <View>
          <IconMaterial name="my-location" size={20} color="#2c7873" />
        </View>
        <View style={{marginLeft: 10}}>
          <Text style={{color: '#000', fontSize:18, fontWeight: 'bold'}}>Downtown West</Text>
          <Text style={{color:'#c2c2c2'}}>St.Louis MQ, USA</Text>
        </View>
      </View>
    </View>
  );
};
const style=StyleSheet.create({
    addressStyle:{
        
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        display: 'flex',
        flexDirection: 'row',
        marginHorizontal:'11%',
        marginTop:'5%'
    }
})
export default Location2;
