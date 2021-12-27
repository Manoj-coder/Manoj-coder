import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ImageBackground,
} from 'react-native';

export default function App() {
  return (
    <View style={{flex: 1, backgroundColor: '#E5E5E5'}}>
      <SafeAreaView>
        <View style={{width: '100%', flexDirection: 'row'}}>
          <View style={{width: '10%', paddingTop: 10}}>
            <Image
              style={{
                height: 20,
                width: 20,
                resizeMode: 'contain',
                alignSelf: 'center',
              }}
              source={require('../../assets/images/schedule.png')}></Image>
          </View>
          <View
            style={{
              width: '80%',
              backgroundColor: '#F8F8F8',
              flexDirection: 'row',
              borderRadius: 10,
            }}>
            <TextInput style={{padding: 10}}></TextInput>
            <Image
              style={{
                height: 20,
                width: 20,
                resizeMode: 'contain',
                position: 'absolute',
                right: 10,
                alignSelf: 'flex-end',
                alignSelf: 'center',
              }}
              source={require('../../assets/images/search.png')}></Image>
          </View>

          <View style={{width: '10%', paddingTop: 10}}>
            <Image
              style={{
                height: 20,
                width: 20,
                resizeMode: 'contain',
                alignSelf: 'center',
              }}
              source={require('../../assets/images/dot.png')}></Image>
          </View>
        </View>
        <View style={{marginTop: 10}}>
          <ImageBackground
            style={{resizeMode: 'stretch', height: 180, width: '100%', alignItems : "center", justifyContent : "flex-end"}}
            source={require('../../assets/images/shopImage.png')}>
            <View
              style={{
                backgroundColor: '#606061',
                alignItems: 'center',
                justifyContent: 'flex-end',
                height: '10%',
                width: '10%',
                bottom : 10
              }}>
              <Text>1/12</Text>
            </View>
          </ImageBackground>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({});
