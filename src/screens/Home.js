import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Pressable,
  TextInput,
} from 'react-native';
import React, {useState, useRef} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconOct from 'react-native-vector-icons/Octicons';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
// import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import CarouselCardItem, {SLIDER_WIDTH, ITEM_WIDTH} from './CarouselCardItem';
import data from './data';
import Fastfood from '../assets/images/fastfood.png'


const {width: screenWidth} = Dimensions.get('window');

const Home = () => {
  const isCarousel = useRef(null);

  return (
    <ScrollView>
      <View
        style={{
          display: 'flex',
          zIndex: 1000,
          position: 'relative',
          justifyContent: 'center',
          flex: 1,
          flexDirection: 'column',
          backgroundColor: '#3D7D7D',
        }}>
        <SafeAreaView style={{marginHorizontal: 20, marginVertical: 20}}>
          <View
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <Text style={styles.text}>Choose and {'\n'}wait your food </Text>
            <Icon
              size={30}
              color="#FFFFFF"
              name="cart-outline"
              style={{marginTop: 10}}
            />
          </View>
          <View style={{position: 'relative'}}>
            <TextInput
              style={{
                backgroundColor: '#89afac',
                marginTop: 20,
                paddingLeft: 65,
                borderRadius: 10,
                width: '100%',
                paddingVertical: 18,
              }}
              placeholderTextColor="#FFFFFF"
              placeholder="Type Name Food"></TextInput>
            <IconOct
              style={{position: 'absolute', top: 35, left: 10, paddingLeft: 10}}
              size={30}
              color="#FFFFFF"
              name="search"
            />
            <Icon
              style={{
                position: 'absolute',
                top: 22,
                borderBottomRightRadius: 10,
                borderTopRightRadius: 10,
                left: 295,
                backgroundColor: '#97BDBA',
                padding: 15,
              }}
              size={30}
              color="#FFFFFF"
              name="tune-vertical"
            />
          </View>
          <View
            style={{...styles.backgroundView, transform: [{translateY: 50}]}}>
            <View
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                backgroundColor: '#fff',
                paddingVertical: 10,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                borderBottomWidth: 2,
                borderColor: '#dedede',
                flexDirection: 'row',
                position: 'relative',
                alignItems: 'center',
              }}>
              <TouchableOpacity>
                <Icon size={34} color="#2C7873" name="food-turkey" />
                <Text style={{color:'#cccccc',fontWeight:'bold'}}>Food</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon size={32} color="#2C7873" name="food-fork-drink" />
                <Text style={{color:'#cccccc',fontWeight:'bold'}}>Drink</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon size={30} color="#2C7873" name="cake-variant" />
                <Text style={{color:'#cccccc',fontWeight:'bold'}}>Dessert</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </View>

      <View
        style={{
          marginTop: 30,
          marginHorizontal: 20,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <Text style={{fontWeight: 'bold', color: '#000000', fontSize: 14}}>
          Near You
        </Text>
        <Text style={{fontWeight: 'bold', color: '#F9B34C', fontSize: 14}}>
          See All
        </Text>
      </View>

      <View>
        <Text style={{marginHorizontal: 20,color:'#cccccc',fontWeight:'bold'}}>Saraubya, jaiwa Taimur</Text>
      </View>
      <View
        style={{
          flex: 1,
          position: 'relative',
          marginLeft: 'auto',
          marginRight: 'auto',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Carousel
          layout="default"
          layoutCardOffset={9}
          ref={isCarousel}
          data={data}
          renderItem={CarouselCardItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          inactiveSlideShift={0}
          useScrollView={true}
          hasParallaxImages={true}
        />
      </View>

        <View
          style={{
          // marginTop: 10,
          marginHorizontal: 20,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <Text style={{fontWeight: 'bold', color: '#000000', fontSize: 14}}>
          Recommendations
        </Text>
        <Text style={{fontWeight: 'bold', color: '#F9B34C', fontSize: 14}}>
        See All
        </Text>
      </View>
      
      <View>
        <Text style={{marginHorizontal: 20,color:'#cccccc',fontWeight:'bold'}}>Most popular food this week</Text>
      </View> 

      <View>
        <Image source={Fastfood}
        resizeMode='contain'
        style={{width:'100%',height:300}}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  item: {
    width: screenWidth - 60,
  },
  loginImage: {
    width: '100%',
    height: 350,
    // resizeMode: 'contain',
    opacity: 10,
    backgroundColor: '#418681',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundView: {
    // position:"absolute",
    // top: -10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    height: 75,
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    top: -10,
    backgroundColor: '#ffffff',
  },

  text: {
    color: '#FFFFFF',
    // marginVertical:'5%',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
export default Home;
