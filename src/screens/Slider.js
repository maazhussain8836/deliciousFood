import { View, Text , Image , StyleSheet } from 'react-native'
import React from 'react'
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
  {
    key: 'one',
    title: 'Choose your favourite menu',
    text: 'Various menus are available,including foods,drinks and various cakes',
    image: require('../assets/images/11.png'),
    backgroundColor: '#FFFFFF',
  },
  {
    key: 'two',
    title: 'Pay with your card',
    text: 'Easy payments with various cards you\n have',
    image: require('../assets/images/11.png'),
    backgroundColor: '#FFFFFF',
  },
  {
    key: 'three',
    title: 'Sit and wait your food',
    text: "just sit and relax ,food will come and \n ready for you to eat",
    image: require('../assets/images/11.png'),
    backgroundColor: '#FFFFFF',
  },
];

// const renderNextButton = () => {
//   return (
//     <>
//       <View 
      
//       style={{borderRadius:12 , marginTop:-30 }}
//       >
//         <Text style={{textAlign:'center',
//         fontSize: 16,
//          fontFamily: 'Poppins-Regular', 
//          width:133, 
//          height:50 , 
//          paddingTop:14 , 
//          color:'#808080',}}>
//           Next
//         </Text>
//       </View>
//     </>
//   );
// }

const Slider= () => {
  const renderDoneButton = () => {
    return (
      <>
     <View 
     
      style={{borderRadius:12 ,  marginTop:-30 }}
      >
        <Text style={{textAlign:'center',fontWeight:'bold',  fontSize: 16, fontFamily: 'Poppins-Regular', width:133, height:50 , paddingTop:12 , color:'#CCCCCC',}}>
          Finish
        </Text>
      </View>
      </>
    );
  }

  const renderSkipButton =(props)=>{
    return (
    <>
    <Text style={{ marginTop:-30, paddingTop:12, marginLeft:165 , fontWeight:'bold',textAlign:'center',fontSize: 16, fontFamily: 'Poppins-Regular', color:'#5F5F5F' }} >Skip</Text>
    </>
    );
  }

  const onDone = () => {
    props.navigation.navigate("login")
   };
   const onSkip = () => {
     props.navigation.navigate("login")
   };

  const RenderItem = ({ item }) => {
    return (
      <View
     
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingBottom: 20,
        }}>
          
       <View style={{
        top:-40,
        borderBottomLeftRadius:50,
        borderBottomRightRadius:50,
        height:500,
        width:'100%',
        backgroundColor:'#418681',
        justifyContent:'center',
        alignItems:'center'
       }}>
       <Image
          style={styles.introImageStyle}
          source={item.image} />
       </View>
       
           <Text style={styles.introTitleStyle}>
          {item.title}
        </Text>
        <Text style={styles.introTextStyle}>
          {item.text}
        </Text>
       
      </View>

     
    );
  };


  return (
    <AppIntroSlider
      activeDotStyle={{backgroundColor: '#E6B257', marginBottom: 150}}
      dotStyle={{backgroundColor: '#CCCCCC', marginBottom: 150}}
      nextLabel="Next"
      data={slides}
      renderItem={RenderItem}
      onDone={onDone}
      showSkipButton={true}
      onSkip={onSkip}
      // renderNextButton={renderNextButton}
      renderDoneButton={renderDoneButton}
      renderSkipButton={renderSkipButton}
    />
  )
}

export default Slider


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  titleStyle: {
    padding: 10,
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
  },
  paragraphStyle: {
    padding: 20,
    textAlign: 'center',
    fontSize: 6,
  },
  introImageStyle: {
    width: 305 ,
    height: 276,
    resizeMode: 'contain',
    
  },
  introTextStyle: {
    fontSize: 18,
    color: '#CCCCCC',
    fontWeight:'bold',
    textAlign: 'center',
    paddingVertical: 10,
    marginBottom:10,
    fontFamily: Platform.OS === 'ios' ? "Gazpacho" : "Gazpacho Regular",
    top:-80,
    
  },
  introTitleStyle: {
    top:-45,
    fontSize: 24,
    color: '#606060',
    fontWeight:'bold',
    textAlign: 'center',
  
    fontFamily: Platform.OS === 'ios' ? "Gazpacho" : "Gazpacho Regular"
 
  },
 
});
