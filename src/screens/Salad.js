import {View, Text, TextInput, Image, StyleSheet, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconOct from 'react-native-vector-icons/Octicons';
import CustomItems from '../components/CustomItems';
const Salad = () => {
  return (
    <View
      style={{
        display: 'flex',
        width: '95%',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}>
      <View
        style={{position: 'relative'}}>
        <TextInput
          style={{
            backgroundColor: '#FFFFFF',
            marginTop: 20,
            paddingLeft: 65,
            borderRadius: 10,
            borderColor: '#575757',
            width: '100%',
            paddingVertical: 18,
          }}
          placeholderTextColor="#000000"
          placeholder="Salad"></TextInput>
        <IconOct
          style={{position: 'absolute', top: 35, left: 10, paddingLeft: 10}}
          size={30}
          color="#000"
          name="search"
        />
        <Icon
          style={{
            position: 'absolute',
            top: 22,
            borderBottomRightRadius: 10,
            borderTopRightRadius: 10,
            left: 295,
            backgroundColor: '#FFFFFF',
            padding: 15,
          }}
          size={33}
          color="#97BDBA"
          name="tune-vertical"
        />
      </View>
      <View style={{marginVertical: 15,marginLeft:'5%'}}>
        <Text style={{fontWeight: 'bold'}}>Result " Salad "</Text>
      </View>
      <ScrollView>
      <View>
        <CustomItems
          source={require('../assets/images/F3.jpg')}
          text={'Spanish Salad\nResturant'}
        />
      </View>
      <View>
        <CustomItems
          source={require('../assets/images/F2.png')}
          text={'Turkish Salad\nResturant'}
        />
      </View>
      <View>
        <CustomItems
          source={require('../assets/images/F4.png')}
          text={'The Pizziano\nResturant'}
        />
      </View>
      <View>
        <CustomItems
          source={require('../assets/images/F5.png')}
          text={'Burgur Lab\nResturant'}
        />
      </View>
      <View>
        <CustomItems
          source={require('../assets/images/F6.png')}
          text={'Bovichick\nResturant'}
        />
      </View>
      <View>
        <CustomItems
          source={require('../assets/images/fastfood.png')}
          text={'Italian Pizza\nResturant'}
        />
      </View>
      <View>
        <CustomItems
          source={require('../assets/images/b1.png')}
          text={'Spanish Salad\nResturant'}
        />
      </View>
      <View>
        <CustomItems
          source={require('../assets/images/b2.jpg')}
          text={'Spanish Salad\nResturant'}
        />
      </View>
      <View>
        <CustomItems
          source={require('../assets/images/F3.jpg')}
          text={'Spanish Salad\nResturant'}
        />
      </View>
      </ScrollView>
    </View>
  );
};

export default Salad;
