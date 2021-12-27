import React, {useState} from 'react';
import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';

const Homeheader = ({onExplore, onFollowing, tab}) => {
  return (
    <View style={{flexDirection: 'row', width: '100%', alignItems: 'center'}}>
      <View
        style={{
          width: '90%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity style={{height: 20}} onPress={() => onExplore()}>
          <Text
            style={{
              fontFamily: 'Helvetica Now Micro',
              color: tab == 1 ? '#6B727C' : 'black',
            }}>
            Explore
          </Text>
          {tab == 0 && (
            <Image
              style={{height: 3, width: 20, alignSelf: 'center', top: 2}}
              source={require('../assets/images/line.png')}></Image>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={{left: 10, height: 20}}
          onPress={() => onFollowing()}>
          <Text
            style={{
              fontFamily: 'Helvetica Now Micro',
              color: tab == 0 ? '#6B727C' : 'black',
            }}>
            Following
          </Text>
          {tab == 1 && (
            <Image
              style={{height: 3, width: 20, alignSelf: 'center', top: 2}}
              source={require('../assets/images/line.png')}></Image>
          )}
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{
          width: '10%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          style={{resizeMode: 'contain', height: 15, width: 15}}
          source={require('../assets/images/search.png')}></Image>
      </TouchableOpacity>
    </View>
  );
};

export default Homeheader;
