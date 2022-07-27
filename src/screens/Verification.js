import {View, Text, Image, StyleSheet, ImageBackground, SafeAreaView, TouchableOpacity, ScrollView, Pressable} from 'react-native';
import React, {useState} from 'react';
import Image11 from '../assets/images/11.png';
import CustomInputs from '../components/CustomInputs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconOct from 'react-native-vector-icons/Octicons';
import CustomButtons from '../components/CustomButtons';
import OTPInputView from '@twotalltotems/react-native-otp-input'

const Verification = () => {

  return (
    
    <View style={{display:'flex',justifyContent:'center',flex:1,flexDirection:'column',backgroundColor:'#3D7D7D',opacity:1}}>
      <SafeAreaView>
        {/* <Image source={Image11} style={styles.loginImage} /> */}
        <ImageBackground source={Image11} resizeMode="cover" style={styles.loginImage}>
          <View style={{width:"100%",height:"100%",backgroundColor:'#3D7D7D',opacity:0.8,position:"absolute"}}>
          </View>
        <Text style={{
          color: "#F5F7F6",
          fontSize: 22,
          fontStyle:'italic'
          }}>Delicious
        </Text>
        </ImageBackground>
        <View style={{...styles.backgroundView}}>
         
          <View style={{padding:20,position:'relative'}}>
            <Text style={{...styles.text,textAlign:'center'}}>Check Your Email</Text>
            <Text style={{...styles.text,textAlign:'center',color:'#c2c2c2',marginTop:'-4%'}}>Delicious has sent a code
             to verify the </Text>
             <Text style={{...styles.text,textAlign:'center',color:'#c2c2c2',marginTop:'-4%'}}> forgotten Password</Text>
          </View>
          <View style={{width:'80%',height:60,marginLeft:'auto',marginRight:'auto'}}>
          <OTPInputView pinCount={5} 
          autoFocusOnLoad
          
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
          onCodeFilled = {(code => {
            console.log(`Code is ${code}, you are good to go!`)
        })}
          />
          </View>
          <View style={{marginVertical:'4%'}}>
            {/* button Login */}
            <CustomButtons  text={'Verification'}/>
          </View>
          <View style={{display:'flex',
           flexDirection:'row',justifyContent:'center',alignContent:'center'}}>
              <TouchableOpacity>
              <Text style={{...styles.text,color:'#000000',fontSize:15}}> Resend: <Text style={{color:'#e6b257',fontWeight:'bold'}}></Text> </Text>
              </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
    
  );
};

const styles = StyleSheet.create({
  loginImage: {
    width: "100%",
    height: 350,
    // resizeMode: 'contain',
    opacity: 10,
    backgroundColor: '#418681',
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
    
  },

  borderStyleHighLighted: {
    borderColor: "#000000",
  },

 
  underlineStyleBase: {
    width: 50,
    height: 50,
    color:'red',
    borderWidth: 2,
    
    
  },
  backgroundView: {
    top: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: 370,
    width: '100%',
    backgroundColor: '#ffffff',
    
   
  },
  text: {
    color: '#000000',
    marginVertical:'5%',
    fontSize:16,
    fontWeight: 'bold',
  },
});
export default Verification;
