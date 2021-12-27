import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  FlatList,
} from 'react-native';

const FeedPost = ({data, playPress}) => {
  const _renderItem = ({item}) => {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
            marginTop: 10,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Image
              source={item.profile}
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
              }}>
              {item.userName}
            </Text>
          </View>
          <View style={{alignSelf: 'center'}}>
            <Image
              style={{
                height: 30,
                width: 20,
                resizeMode: 'contain',
              }}
              source={require('../assets/images/dot.png')}></Image>
          </View>
        </View>
        <View>
          <ImageBackground
            resizeMode="stretch"
            style={{height: 360, width: '100%', marginTop: 10}}
            source={item.feedImage}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: 360,
              }}>
              <TouchableOpacity
              onPress={playPress}
                style={{
                  backgroundColor: 'rgba(22, 22, 22, 0.5)',
                  height: 35,
                  width: 35,
                  borderRadius: 17.5,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  style={{
                    height: 14,
                    width: 14,
                    resizeMode: 'contain',
                    alignSelf: 'center',
                  }}
                  source={require('../assets/images/play.png')}></Image>
              </TouchableOpacity>
              <View
                style={{
                  position: 'absolute',
                  left: 15,
                  bottom: 15,
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
                  position: 'absolute',
                  right: 15,
                  bottom: 15,
                  justifyContent: 'space-between',
                  backgroundColor: 'rgba(22, 22, 22, 0.5)',
                  height: 30,
                  width: 30,
                  borderRadius: 17.5,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <View>
                  <Image
                    style={{height: 15, width: 15, resizeMode: 'contain'}}
                    source={require('../assets/images/sound.png')}></Image>
                </View>
              </View>
            </View>
          </ImageBackground>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 15,
              marginHorizontal: 15,
            }}>
            <View>
              <Image
                style={{height: 15, width: 15, resizeMode: 'contain'}}
                source={require('../assets/images/share.png')}></Image>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  style={{
                    height: 15,
                    width: 15,
                    resizeMode: 'contain',
                    marginRight: 8,
                  }}
                  source={require('../assets/images/like.png')}></Image>
                <Text style={{marginRight: 8}}>800</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Image
                  style={{
                    height: 15,
                    width: 15,
                    resizeMode: 'contain',
                    marginRight: 8,
                  }}
                  source={require('../assets/images/star.png')}></Image>
                <Text style={{marginRight: 8}}>89</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Image
                  style={{
                    height: 15,
                    width: 15,
                    resizeMode: 'contain',
                    marginRight: 8,
                  }}
                  source={require('../assets/images/comment.png')}></Image>
                <Text>32</Text>
              </View>
            </View>
          </View>
          <View style={{marginHorizontal: 15, width: '80%'}}>
            <Text style={{fontFamily: 'Helvetica Now Micro'}}>
              {item.feedTitle}
            </Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text
                style={{
                  fontFamily: 'Helvetica Now Micro',
                  fontSize: 12,
                  color: '#161616',
                }}>
                {item.desciption}{' '}
              </Text>
              <Text
                style={{
                  fontFamily: 'Helvetica Now Micro',
                  fontSize: 12,
                  color: '#161616',
                }}>
                ...More
              </Text>
            </View>
          </View>
          <View style={{marginHorizontal: 40, marginTop: 15}}>
            <View style={{flexDirection: 'row', width: '80%'}}>
              <Text style={{fontWeight: '500', fontSize: 12}}>
                {item.carissa}
              </Text>
              <Text
                style={{
                  fontFamily: 'Helvetica Now Micro',
                  fontSize: 10,
                  color: '#161616',
                }}>
                {item.carissaDec}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                width: '80%',
                marginTop: 10,
                marginBottom: 10,
              }}>
              <Text style={{fontWeight: '500', fontSize: 12}}>
                {item.fasha}
              </Text>
              <Text
                style={{
                  fontFamily: 'Helvetica Now Micro',
                  fontSize: 10,
                  color: '#161616',
                }}>
                {item.fashaDec}{' '}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View>
      <FlatList style={{marginTop : 10}} showsVerticalScrollIndicator={false} data={data} renderItem={_renderItem} />
    </View>
  );
};

export default FeedPost;
