// components/Popular.js
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

// 인기 가게 데이터 임포트
import {popularStores} from './popular';

// 화면 너비 계산
const screenWidth = Dimensions.get('window').width;
const ITEM_WIDTH = 150; // 각 아이템의 너비
const ITEM_HEIGHT = 200; // 각 아이템의 높이
const SPACING = 10; // 아이템 간 간격

const Popular = () => {
  const renderItem = ({item}: any) => (
    <TouchableOpacity style={styles.itemContainer} activeOpacity={0.8}>
      <Image source={item.image} style={styles.image} resizeMode="cover" />
      <View style={styles.textContainer}>
        <Text style={styles.storeName}>{item.name}</Text>
        <Text style={styles.storeAddress}>{item.address}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>인기 있는 가게</Text>
      <FlatList
        data={popularStores}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        ItemSeparatorComponent={() => <View style={{width: SPACING}} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingLeft: 15,
    // backgroundColor: '#f0f0f0', // 배경색 설정 (선택 사항)
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  listContent: {
    paddingRight: 15, // 마지막 아이템과 오른쪽 간격
  },
  itemContainer: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    borderRadius: 10,
    backgroundColor: '#fff',
    overflow: 'hidden',
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // Android 그림자
  },
  image: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // 반투명 검은색 배경
    padding: 10,
  },
  storeName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  storeAddress: {
    color: '#fff',
    fontSize: 12,
    marginTop: 2,
  },
});

export default Popular;
