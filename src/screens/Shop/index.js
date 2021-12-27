import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ImageBackground,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import ShopHeader from '../../components/shopHeader';
import ShopFeed from '../../Json/shopFeed';

export default function App() {
  const [tab, setTab] = useState(0);
  const _renderItem = ({item}) => {
    console.log('items---->', item);
    return (
      <View style={{marginBottom: 15, maxHeight: '100%'}}>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Image
            style={{
              height: 180,
              width: 180,
              resizeMode: 'contain',
              borderRadius: 10,
            }}
            source={item.itemImage}></Image>
        </View>
        <View style={{width: 180, alignSelf: 'center'}}>
          <Text style={{marginVertical: 10}}>{item.itemName}</Text>
          <TouchableOpacity
            style={{backgroundColor: '#F19BA8', width: '60%', borderRadius: 4}}>
            <Text style={{padding: 5, alignSelf: 'center', color: '#fff'}}>
              {item.deliveryType}
            </Text>
          </TouchableOpacity>
          <View style={{justifyContent: 'space-between', flexDirection: 'row', marginTop : 15}}>
            <Text>{item.price}</Text>
            <Text style={{color: '#F33737', marginRight: 5}}>
              {item.leftItem}
            </Text>
          </View>
          {item?.soldOut && (
            <Text style={{textDecorationStyle: 'dashed', marginVertical : 10}}>{item.soldOut}</Text>
          )}
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{textDecorationLine:"line-through", textDecorationColor: "#BEBEBE", color : "#BEBEBE", marginVertical : 15}}>
              {item.orgPrice}
            </Text>
            <Image
              style={{heigh: 10, width: 15, resizeMode: 'contain', bottom : item?.soldOut ? 40 : 10, right : 10}}
              source={require('../../assets/images/bookmark.png')}></Image>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: '#E5E5E5'}}>
      <SafeAreaView style={{flex: 1}}>
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
            <TextInput placeholder="Search" style={{padding: 10}}></TextInput>
            <Image
              style={{
                height: 15,
                width: 15,
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
        <View style={{marginTop: 10, flex: 1}}>
          <ImageBackground
            style={{
              resizeMode: 'stretch',
              height: 180,
              width: '100%',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}
            source={require('../../assets/images/shopImage.png')}>
            <View
              style={{
                backgroundColor: '#606061',
                alignItems: 'center',
                justifyContent: 'flex-end',
                width: '10%',
                bottom: 8,
                borderRadius: 5,
              }}>
              <Text style={{color: '#fff', padding: 3}}>1/12</Text>
            </View>
          </ImageBackground>
          <View style={{marginTop: 10, marginBottom: 10}}>
            <ShopHeader
              tab={tab}
              onLongBook={() => setTab(0)}
              onOuter={() => setTab(1)}
              onDress={() => setTab(2)}
              onSkirt={() => setTab(3)}
              onPants={() => setTab(4)}
            />
          </View>
          <View style={{flex: 1}}>
            <FlatList
              contentContainerStyle={{
                alignItems: 'center',
                justifyContent: 'center',
                marginVertical: 15,
              }}
              data={ShopFeed}
              renderItem={_renderItem}
              numColumns={2}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({});
