import { View, Text,TextInput,StyleSheet } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconOct from 'react-native-vector-icons/Octicons';
import IconIon from 'react-native-vector-icons/Ionicons';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';

const CustomLocation = ({placeholder,color,icon}) => {
  return (
    <View>
      <View
        style={{position: 'relative',marginLeft:'5%'}}>
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
          placeholderTextColor={color}
          placeholder={placeholder}>
        </TextInput>
        <IconOct
          style={{position: 'absolute', top: 35, left: 10, paddingLeft: 10}}
          size={25}
          color='#c2c2c2'
          name="search"
        />
        {
            icon ? (
                <>
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
          size={30}
          color="#97BDBA"
          name="tune-vertical"
        />
                </>
            ) : null
        }
      
      </View>
      <View
        style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        marginTop:30,
        marginRight:40,
        
        }}>
        <View
          style={{...style.boxShadow,
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            marginRight: 20,
            

          }}>
          <Icon size={20} color="#2c7873" name="home" />
          <Text style={{color:'#000000',marginLeft:4}}>At Home</Text>
        </View>
        <View
          style={{...style.boxShadow,
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
          
          }}>
          <IconMaterial size={20} color="#2c7873" name="work" />
          <Text style={{color:'#000000',marginLeft:7}}>At Work</Text>
        </View>
      </View>
    </View>
  )
}

const style=StyleSheet.create({
  boxShadow:{
    paddingVertical:'2%',
    width:'30%',
    borderRadius:15,
    shadowColor: 'black',
    shadowOpacity: 0.86,
    shadowOffset: { width: 10, height: 8},
    shadowRadius: 20,
    elevation: 7,
    backgroundColor: 'white'
  }
})
export default CustomLocation