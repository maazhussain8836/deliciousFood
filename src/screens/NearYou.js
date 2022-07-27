import { View, Text } from 'react-native'
import React from 'react'
import CustomItems from '../components/CustomItems'
import CustomButtons from '../components/CustomButtons'
const NearYou = () => {
  return (
    <>
    <View style={{position:'relative', flex:1}} >
    <View style={{marginTop:20}}>
        <CustomItems
          source={require('../assets/images/F5.png')}
          text={'Burgur Lab\nResturant'}
        />
        <CustomItems
          source={require('../assets/images/b1.png')}
          text={'Italiano Lab\nResturant'}
        />
      </View>
      <View style={{position:'absolute',bottom:30,width:'100%'}}>
        <CustomButtons text={'Button'}/>
      </View>
    </View>
    </>
  )
}

export default NearYou