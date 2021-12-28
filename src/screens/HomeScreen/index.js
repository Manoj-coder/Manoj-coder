import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {decrement, increment} from '../../redux/homeScreen';
import {Button, Text, Box, ScrollView} from 'native-base';
import BottomBar from '../../components/BottomBar';
import {toggleReguireLogin} from '../../redux/globalStore';
import TabScreen from '../TabScreen';
import ProfileScreen from '../ProfileScreen/index';
import ShopScreen from '../Shop/index';

export default function HomeScreen() {
  const index = useSelector(state => state.homeScreen.indexBottomBar);
  const dispatch = useDispatch();

  return (
    <Box style={{flex: 1, width: '100%', flexDirection: 'column'}} safeAreaTop>
      {index === 0 && <TabScreen />}
      {index === 1 && <ShopScreen />}
      {index === 2 && <Text>Video</Text>}
      {index === 3 && <Text>Notification</Text>}
      {index === 4 && <ProfileScreen />}
      <Box
        style={{position: 'absolute', width: '100%', bottom: 0, height: 50}}
        safeAreaBottom>
        <BottomBar />
      </Box>
    </Box>
  );
}
