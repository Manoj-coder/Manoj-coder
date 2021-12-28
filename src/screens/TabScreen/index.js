import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {decrement, increment} from '../../redux/homeScreen';
import {Button, Text, Box, ScrollView} from 'native-base';
import TabBar from '../../components/TabBar';
import {toggleReguireLogin} from '../../redux/globalStore';
import FollowingScreen from '../FollowingScreen';
import ExploreScreen from '../ExploreScreen';

export default function TabScreen() {
  const index = useSelector(state => state.tab.indexTab);
  const dispatch = useDispatch();

  return (
    <Box style={{flex: 1, width: '100%', flexDirection: 'column'}}>
      <Box
        style={{
          position: 'absolute',
          width: '100%',
          top: 0,
          height: 60,
          zIndex: 1,
        }}
        safeAreaTop>
        <TabBar />
      </Box>
      {index === 0 && <ExploreScreen />}
      {index === 1 && <FollowingScreen />}
    </Box>
  );
}
