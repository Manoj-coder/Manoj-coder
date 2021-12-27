import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import Homeheader from '../../components/homeheader';
import FeedPost from '../../components/feedPost';
import feedData from '../../Json/postFeed';

const Following = ({navigation}) => {
  const [tab, setTab] = useState(0);
  return (
    <SafeAreaView>
      <Homeheader
        tab={tab}
        onExplore={() => setTab(0)}
        onFollowing={() => setTab(1)}
      />
      <FeedPost data={feedData} playPress={() => navigation.navigate('Vlog')} />
    </SafeAreaView>
  );
};

export default Following;
