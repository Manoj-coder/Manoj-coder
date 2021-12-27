import React, {Component, useState} from 'react'
import {
  ScrollView,
  Dimensions,
  View,
  Platform,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
} from 'react-native'
import {Container, Text, Picker, Button} from 'native-base'
import styles from './styles'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import IconI from 'react-native-vector-icons/Ionicons'
import IconFA from 'react-native-vector-icons/FontAwesome'
import images from './../../assets/img/image'

class ProfileScreen extends React.Component {
  constructor (props) {
    super(props)
    self = this
    this.state = {
      mobile: '',
      country_code: '',
      code: null,
      isLoading: false,
    }
  }

  componentDidMount () {
    const self = this
  }

  render () {
    // const {goBack} = this.props.navigation
    return (
      <SafeAreaProvider style={{backgroundColor: '#FFFFFF'}}>
        <ImageBackground
          style={{justifyContent: 'flex-start', height: 250}}
          source={images.Profile_view}>
          <View style={{marginTop: 10, flexDirection: 'row'}}>
            <View
              style={{
                marginHorizontal: 10,
                flex: 0.5,
                alignItems: 'flex-start',
                justifyContent: 'center',
              }}>
              <IconI
                name='ios-menu'
                size={35}
                color={'#fff'}
                style={{marginLeft: 5}}
              />
            </View>
            <View
              style={{
                flex: 0.5,
                marginHorizontal: 10,
                alignItems: 'flex-end',
                justifyContent: 'center',
              }}>
              <IconFA
                name='external-link'
                size={35}
                color={'#fff'}
                style={{marginLeft: 5}}
              />
            </View>
          </View>

          <View style={{marginTop: 10, flexDirection: 'row'}}>
            <View
              style={{
                marginLeft: 10,
                flex: 0.25,
                alignItems: 'flex-start',
                justifyContent: 'center',
              }}>
              <Image
                source={images.User}
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 40,
                  borderColor: '#fff',
                  borderWidth: 1,
                }}
              />
            </View>
            <View
              style={{
                marginLeft: 10,
                flex: 0.5,
                alignItems: 'flex-start',
                justifyContent: 'center',
              }}>
              <Text style={{color: '#fff', fontSize: 14, fontWeight: '500'}}>
                Christine Jingle
              </Text>
              <Text
                style={{color: '#C8C8C8', fontSize: 10, fontWeight: 'normal'}}>
                @christine
              </Text>
            </View>
            <View
              style={{
                marginRight: 10,
                flex: 0.3,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TouchableOpacity style={styles.EditProfileBtn}>
                <Text style={{color: '#fff', fontWeight: '500', fontSize: 12}}>
                  Edit Profile
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                marginHorizontal: 10,
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: '#fff', fontSize: 12, fontWeight: 'normal'}}>
                I believe in making the impossible possible because there’s no
                fun in giving up.
              </Text>
            </View>
          </View>

          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                marginHorizontal: 10,
                flex: 0.33,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: '#fff', fontSize: 14, fontWeight: '500'}}>
                144
              </Text>
              <Text
                style={{color: '#C8C8C8', fontSize: 10, fontWeight: 'normal'}}>
                Following
              </Text>
            </View>
            <View
              style={{
                marginHorizontal: 10,
                flex: 0.33,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: '#fff', fontSize: 14, fontWeight: '500'}}>
                125K
              </Text>
              <Text
                style={{color: '#C8C8C8', fontSize: 10, fontWeight: 'normal'}}>
                Followers
              </Text>
            </View>
            <View
              style={{
                marginHorizontal: 10,
                flex: 0.33,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: '#fff', fontSize: 14, fontWeight: '500'}}>
                500
              </Text>
              <Text
                style={{color: '#C8C8C8', fontSize: 10, fontWeight: 'normal'}}>
                Likes & Collects
              </Text>
            </View>
          </View>
        </ImageBackground>
        <View style={{backgroundColor: '#fff', marginTop: -50}}>
          <ScrollView
            style={styles.PostView}
            showsVerticalScrollIndicator={false}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 20,
              }}>
              <View
                style={{
                  flex: 0.5,
                  height: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: '#000',
                    fontSize: 14,
                    fontWeight: '500',
                    borderBottomColor: '#A8D8FF',
                    borderBottomWidth: 2,
                  }}>
                  Posts
                </Text>
              </View>
              <View
                style={{
                  flex: 0.5,
                  height: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: '#6B727C',
                    fontSize: 14,
                    fontWeight: '500',
                  }}>
                  Collections
                  <IconI
                    name='ios-lock-closed'
                    size={15}
                    color={'#6B727C'}
                    style={{marginLeft: 5}}
                  />
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaProvider>
    )
  }
}
export default ProfileScreen
