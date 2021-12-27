import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  Image,
  Slider,
  TouchableOpacity,
} from 'react-native';
import Header from '../../components/header';

const Vlog = ({navigation}) => {
  const [value, setValue] = useState(0);
  return (
    <View>
      <ImageBackground
        style={{height: '100%'}}
        source={require('../../assets/images/vlogImage.png')}>
        <Image
          style={{
            position: 'absolute',
            top: 0,
            resizeMode: 'stretch',
            height: 250,
          }}
          source={require('../../assets/images/upGradient.png')}></Image>
        <SafeAreaView style={{flex: 1}}>
          <Image
            style={{
              position: 'absolute',
              bottom: 0,
              resizeMode: 'stretch',
              height: 250,
            }}
            source={require('../../assets/images/downGradient.png')}></Image>
          <Header back={() => navigation.goBack()} />
          <View
            style={{justifyContent: 'flex-end', flex: 1, marginHorizontal: 15}}>
            <View
              style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
              <TouchableOpacity>
                <Image
                  style={{
                    position: 'absolute',
                    alignSelf: 'center',
                    justifyContent: 'center',
                    resizeMode: 'contain',
                    height: 50,
                    width: 50,
                  }}
                  source={require('../../assets/images/play.png')}></Image>
              </TouchableOpacity>
            </View>
            <View
              style={{
                justifyContent: 'space-between',
                backgroundColor: 'rgba(22, 22, 22, 0.5)',
                height: 30,
                width: 100,
                borderRadius: 17.5,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View>
                <Text
                  style={{
                    color: '#fff',
                    fontFamily: 'Helvetica Now Micro',
                    fontSize: 12,
                  }}>
                  Products
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 20,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  source={require('../../assets/images/profile.png')}
                  style={{
                    height: 35,
                    width: 35,
                    resizeMode: 'contain',
                  }}></Image>
                <Text
                  style={{
                    alignSelf: 'center',
                    marginLeft: 10,
                    fontFamily: 'Helvetica Now Micro',
                    color: '#fff',
                  }}>
                  Sarah
                </Text>
                <View
                  style={{
                    justifyContent: 'space-between',
                    backgroundColor: '#A8D8FF',
                    height: 35,
                    width: 85,
                    borderRadius: 17.5,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: 10,
                  }}>
                  <View>
                    <Text
                      style={{
                        color: '#fff',
                        fontFamily: 'Helvetica Now Micro',
                        fontSize: 12,
                      }}>
                      Follow
                    </Text>
                  </View>
                </View>
              </View>
              <View>
                <Image
                  style={{height: 20, width: 20, resizeMode: 'contain'}}
                  source={require('../../assets/images/minimize.png')}></Image>
              </View>
            </View>
            <Text
              style={{
                color: '#fff',
                fontFamily: 'Helvetica Now Micro',
                fontSize: 12,
                marginTop: 10,
              }}>
              Mickey cardigan and jeans set
            </Text>
            <Text
              style={{
                color: '#fff',
                fontFamily: 'Helvetica Now Micro',
                fontSize: 12,
                marginTop: 5,
              }}>
              Ready, set, summer! It’s time to take the ...More
            </Text>
            {/* <Slider
              maximumValue={100}
              minimumValue={0}
              step="1"
              value={value}
              trackImage={require('../../assets/images/slider.png')}
              onValueChange={sliderValue => setValue(sliderValue)}
            /> */}
            <Image
              style={{width: '100%%', resizeMode: 'contain'}}
              source={require('../../assets/images/slider.png')}></Image>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default Vlog;
