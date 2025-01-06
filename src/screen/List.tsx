import * as React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import Head from '../components/List/Head';
import Popular from '../components/List/Popular';
import ContentList from '../components/List/ContentList';

function ListScreen({route}) {
  const item = route?.params || {};
  return (
    <SafeAreaView style={styles.container}>
      <Head />
      <ContentList selectedId={item?.id || ''} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.space}></View>
        <Popular name="이런 가게" />
        <View style={styles.space}></View>
        <Popular name="저런 가게" />
        <View style={styles.space}></View>
        <Popular />
        <View style={styles.space}></View>
        <Popular />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  space: {
    backgroundColor: 'white',
    height: 10,
    width: '100%',
  },
});

export default ListScreen;
