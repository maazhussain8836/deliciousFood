import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'

const CustomButtons = ({text}) => {
  return (
    <View style={style.btnView}>
      <TouchableOpacity>
        <Text style={style.btntext}>{text}</Text>
      </TouchableOpacity>
    </View>
  )
}
const style=StyleSheet.create({
btnView:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    // borderWidth:1,
    marginTop:10,
    width:'85%',
    // marginHorizontal:'auto',
    marginLeft:'auto',
    marginRight:'auto',
    paddingVertical:17,
    borderRadius:50,
    backgroundColor:'#F9B34C',
    borderColor:'#F9B34C',
    
},
btntext:{
    fontWeight:'bold',
    color:'#000000',
    fontSize:17,
    
}
})
export default CustomButtons