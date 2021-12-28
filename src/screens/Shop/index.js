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
  ScrollView,
} from 'react-native';
import ShopHeader from '../../components/ShopHeader/shopHeader';
import ShopFeed from '../../Json/shopFeed';
import ProductData from '../../Json/productFeed';
import {Actionsheet} from 'native-base';

export default function App() {
  const [tab, setTab] = useState(0);
  const [isShowing, setIsShowing] = useState(false);
  const [tabSlider, setTabSlider] = useState(0);
  const _renderItem = ({item}) => {
    return (
      <View style={{maxHeight: '100%'}}>
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
            onPress={() => setIsShowing(true)}
            style={{backgroundColor: '#F19BA8', width: '60%', borderRadius: 4}}>
            <Text style={{padding: 5, alignSelf: 'center', color: '#fff'}}>
              {item.deliveryType}
            </Text>
          </TouchableOpacity>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              marginTop: 15,
            }}>
            <Text>{item.price}</Text>
            <Text style={{color: '#F33737', marginRight: 5}}>
              {item.leftItem}
            </Text>
          </View>
          {item?.soldOut && (
            <Text style={{textDecorationStyle: 'dashed', marginVertical: 10}}>
              {item.soldOut}
            </Text>
          )}
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={{
                textDecorationLine: 'line-through',
                textDecorationColor: '#BEBEBE',
                color: '#BEBEBE',
                marginVertical: 15,
              }}>
              {item.orgPrice}
            </Text>
            <Image
              style={{
                heigh: 10,
                width: 15,
                resizeMode: 'contain',
                bottom: item?.soldOut ? 40 : 10,
                right: 10,
              }}
              source={require('../../assets/img/bookmark.png')}></Image>
          </View>
        </View>
      </View>
    );
  };
  const _productItem = ({item}) => {
    console.log('items====>', item);
    return (
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          marginVertical: 10,
        }}>
        <View style={{width: '20%'}}>
          <Image
            style={{height: 80, width: 60, resizeMode: 'contain'}}
            source={item.productImage}></Image>
        </View>
        <View style={{width: '60%'}}>
          <Text
            style={{
              fontFamily: 'Helvetica Now Micro',
              fontWeight: '400',
              fontSize: 12,
              color: '#161616',
              lineHeight: 18,
            }}>
            {item.productTitle}
          </Text>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <Text
              style={{
                fontFamily: 'Helvetica Now Micro',
                fontWeight: '400',
                fontSize: 12,
                color: '#161616',
                lineHeight: 18,
              }}>
              {item.disPrice}
            </Text>
            <Text
              style={{
                fontFamily: 'Helvetica Now Micro',
                fontWeight: '400',
                fontSize: 12,
                color: '#C8C8C8',
                textDecorationLine: 'line-through',
                textDecorationColor: '#BEBEBE',
                lineHeight: 18,
                marginLeft: 5,
              }}>
              {item.orgPrice}
            </Text>
          </View>
        </View>
        <View style={{width: '20%'}}>
          <TouchableOpacity onPress={() => setTabSlider(1)}>
            <Image
              style={{
                height: 20,
                width: 20,
                resizeMode: 'contain',
                alignSelf: 'flex-end',
              }}
              source={item.tubelightIcon}></Image>
          </TouchableOpacity>
          <Image
            style={{
              height: 20,
              width: 20,
              resizeMode: 'contain',
              justifyContent: 'flex-end',
              alignSelf: 'flex-end',
              marginTop: '50%',
            }}
            source={item.bookmarkIcon}></Image>
        </View>
      </View>
    );
  };

  const closePress = () => {
    setTimeout(() => {
      setTabSlider(0);
    }, 500),
      setIsShowing(false);
  };
  return (
    <View style={{flex: 1}}>
      {tabSlider == 0 ? (
        <Actionsheet
          isOpen={isShowing}
          onClose={() => setIsShowing(false)}
          hideDragIndicator>
          <Actionsheet.Content style={{backgroundColor: '#FFF'}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
                marginTop: 10,
                borderBottomWidth: 2,
                borderColor: '#F8F8F8',
                paddingBottom: 18,
              }}>
              <View />
              <Text style={{fontFamily: 'Helvetica Now Micro'}}>Products</Text>
              <TouchableOpacity onPress={() => setIsShowing(false)}>
                <Image
                  style={{height: 20, width: 20, resizeMode: 'contain'}}
                  source={require('../../assets/img/close.png')}></Image>
              </TouchableOpacity>
            </View>
            <FlatList
              contentContainerStyle={{marginVertical: 0}}
              data={ProductData}
              renderItem={_productItem}
            />
            <Actionsheet.Item></Actionsheet.Item>
          </Actionsheet.Content>
        </Actionsheet>
      ) : (
        <Actionsheet
          isOpen={isShowing}
          onClose={() => setIsShowing(false)}
          hideDragIndicator>
          <Actionsheet.Content style={{backgroundColor: '#FFF'}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
                marginTop: 10,
                borderBottomWidth: 2,
                borderColor: '#F8F8F8',
                paddingBottom: 15,
              }}>
              <View />
              <Text style={{fontFamily: 'Helvetica Now Micro'}}>Shortcuts</Text>
              <TouchableOpacity onPress={() => closePress()}>
                <Image
                  style={{height: 20, width: 20, resizeMode: 'contain'}}
                  source={require('../../assets/img/close.png')}></Image>
              </TouchableOpacity>
            </View>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  marginVertical: 20,
                }}>
                <TouchableOpacity
                  style={{alignItems: 'center', width: '33.3%'}}>
                  <Image
                    style={{
                      marginVertical: 9,
                      height: 22,
                      width: 22,
                      resizeMode: 'contain',
                    }}
                    source={require('../../assets/img/bag.png')}></Image>
                  <Text
                    style={{fontFamily: 'Helvetica Now Micro', fontSize: 10}}>
                    Shopping Bag
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{alignItems: 'center', width: '33.3%'}}>
                  <Image
                    style={{
                      marginVertical: 9,
                      height: 22,
                      width: 22,
                      resizeMode: 'contain',
                    }}
                    source={require('../../assets/img/schedule.png')}></Image>
                  <Text
                    style={{fontFamily: 'Helvetica Now Micro', fontSize: 10}}>
                    Orders
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{alignItems: 'center', width: '33.3%'}}>
                  <Image
                    style={{
                      marginVertical: 9,
                      height: 22,
                      width: 22,
                      resizeMode: 'contain',
                    }}
                    source={require('../../assets/img/bookmark.png')}></Image>
                  <Text
                    style={{fontFamily: 'Helvetica Now Micro', fontSize: 10}}>
                    Wishlist
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  marginVertical: 20,
                }}>
                <TouchableOpacity
                  style={{alignItems: 'center', width: '33.3%'}}>
                  <Image
                    style={{
                      marginVertical: 9,
                      height: 22,
                      width: 22,
                      resizeMode: 'contain',
                    }}
                    source={require('../../assets/img/customer.png')}></Image>
                  <Text
                    style={{fontFamily: 'Helvetica Now Micro', fontSize: 10}}>
                    Customer
                  </Text>
                  <Text
                    style={{fontFamily: 'Helvetica Now Micro', fontSize: 10}}>
                    Service
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{alignItems: 'center', width: '33.3%'}}>
                  <Image
                    style={{
                      marginVertical: 9,
                      height: 22,
                      width: 22,
                      resizeMode: 'contain',
                    }}
                    source={require('../../assets/img/addBook.png')}></Image>
                  <Text
                    style={{fontFamily: 'Helvetica Now Micro', fontSize: 10}}>
                    Address
                  </Text>
                  <Text
                    style={{fontFamily: 'Helvetica Now Micro', fontSize: 10}}>
                    Book
                  </Text>
                </TouchableOpacity>
                <View style={{alignItems: 'center', width: '33.3%'}}></View>
              </View>
            </View>
            <Actionsheet.Item></Actionsheet.Item>
          </Actionsheet.Content>
        </Actionsheet>
      )}
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <View style={{width: '100%', flexDirection: 'row'}}>
          <View style={{width: '10%', paddingTop: 10}}>
            <Image
              style={{
                height: 20,
                width: 20,
                resizeMode: 'contain',
                alignSelf: 'center',
              }}
              source={require('../../assets/img/schedule.png')}></Image>
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
              source={require('../../assets/img/search.png')}></Image>
          </View>

          <View style={{width: '10%', paddingTop: 10}}>
            <Image
              style={{
                height: 20,
                width: 20,
                resizeMode: 'contain',
                alignSelf: 'center',
              }}
              source={require('../../assets/img/dot.png')}></Image>
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
            source={require('../../assets/img/shopImage.png')}>
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
          <View style={{flex: 1}}>
            <ScrollView
              horizontal
              style={{marginTop: 10, marginBottom: 10, height: 50}}>
              <ShopHeader
                tab={tab}
                onLongBook={() => setTab(0)}
                onOuter={() => setTab(1)}
                onDress={() => setTab(2)}
                onSkirt={() => setTab(3)}
                onPants={() => setTab(4)}
              />
            </ScrollView>
            <FlatList
              contentContainerStyle={{
                alignItems: 'center',
                justifyContent: 'center',
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
