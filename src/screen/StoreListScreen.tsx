import * as React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import Head from '../components/List/Head';
import Popular from '../components/List/Popular';
import ContentList from '../components/List/ContentList';
import InfiniteScrollComponent from '../components/List/Stores/InfiniteScrollComponent';

function StoreListScreen({route}: any) {
  const item = route?.params || {};
  return (
    <SafeAreaView style={styles.container}>
      <Head />
      <ContentList selectedId={item?.id || ''} />
      <InfiniteScrollComponent />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FCF7FA',
    flex: 1,
  },
});

export default StoreListScreen;
