import {View, Text, Image, StyleSheet, ImageBackground, SafeAreaView, TouchableOpacity, ScrollView, Pressable} from 'react-native';
import React, {useState} from 'react';
import Image11 from '../assets/images/11.png';
import CustomInputs from '../components/CustomInputs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconOct from 'react-native-vector-icons/Octicons';
import CustomButtons from '../components/CustomButtons';
const Register = () => {
  const [Username, setUsername] = '';
  const [Email, setEmail] = '';
  const [Password,setPassword]=''
  
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
            <Text style={styles.text}>Username</Text>
            <Icon size={24} color="#3d7d7d" name="account-outline" style={{position:'absolute',top:90,left:23}}/>
            <CustomInputs
              placeholder={'Username'}
              secureTextEntry={false}
              value={Username}
              setValue={setUsername}
            />
          </View>
          <View style={{padding:20,position:'relative'}}>
            <Text style={styles.text}>Email</Text>
            <Icon size={22} color="#3d7d7d" name="email-outline" style={{position:'absolute',top:90,left:26}}/>
            <CustomInputs
              placeholder={'Email'}
              secureTextEntry={false}
              value={Email}
              setValue={setEmail}
            />
            
          </View>
          <View style={{padding:20,position:'relative',marginBottom:20}}>
            <Text style={styles.text}>Password</Text>
            <IconOct size={20} color="#3d7d7d" name="lock" style={{position:'absolute',top:90,left:26}}/>
            <CustomInputs
              placeholder={'Password'}
              secureTextEntry={false}
              value={Password}
              setValue={setPassword}
            />
            <Icon size={24} color="#3d7d7d" name="eye-off-outline" style={{position:'absolute',top:90,left:343}}/>
          </View>
         
          <View>
            {/* button Login */}
            <CustomButtons text={'Register'}/>
          </View>
          <View style={{display:'flex',
           flexDirection:'row',justifyContent:'center',alignContent:'center'}}>
              <TouchableOpacity>
              <Text style={{...styles.text,color:'#606060',fontSize:15}}> Have an Account? <Text style={{color:'#e6b257',fontWeight:'bold'}}>Login</Text> </Text>
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
  backgroundView: {
    top: -10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: 550,
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
export default Register;
