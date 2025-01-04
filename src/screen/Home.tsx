import * as React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from 'react-native';
import Head from '../components/Home/Head';
import Body from '../components/Home/Body';
import Reservation from '../components/Home/Reservation';
import Navbar from '../navigation/Navbar';
import Place from '../components/Home/Place';
import Popular from '../components/Home/Popular';

// 이미지 경로 설정
const backgroundImage = require('../image/Group2.png');

function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <ImageBackground source={backgroundImage} style={styles.backgroundImage}> */}
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Head />
        {/* <Border /> */}
        <Body />
        <Reservation />
        <View style={styles.space}></View>
        <Place />
        <View style={styles.space}></View>
        <Popular />
      </ScrollView>
      {/* </ImageBackground> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // 이미지가 화면을 덮도록 설정
  },
  space: {
    height: 10,
    width: '100%',
  },
});

export default HomeScreen;
