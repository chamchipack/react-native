// components/Popular.js
import React, {useState, useEffect} from 'react';
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
import {useNavigation} from '@react-navigation/native';

// 화면 너비 계산
const screenWidth = Dimensions.get('window').width;
const ITEM_WIDTH = 150; // 각 아이템의 너비
const ITEM_HEIGHT = 150; // 각 아이템의 높이
const SPACING = 10; // 아이템 간 간격

const Popular = ({name = ''}) => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 2 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    // Cleanup the timer on unmount
    return () => clearTimeout(timer);
  }, []);

  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('Detail')}
      style={styles.itemContainer}
      activeOpacity={0.8}>
      <Image source={item.image} style={styles.image} resizeMode="cover" />
      <View style={styles.textContainer}>
        <Text style={styles.storeName}>{item.name}</Text>
        <Text style={styles.storeAddress}>{item.address}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderSkeleton = () => {
    // Number of skeleton items to display
    const skeletonItems = Array.from({length: 5});

    return (
      <FlatList
        data={skeletonItems}
        renderItem={() => (
          <View style={styles.itemContainer}>
            <View style={styles.imageSkeleton} />
            <View style={styles.textSkeletonContainer}>
              <View style={styles.textSkeletonLineShort} />
              <View style={styles.textSkeletonLineLong} />
            </View>
          </View>
        )}
        keyExtractor={(_, index) => `skeleton-${index}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        ItemSeparatorComponent={() => <View style={{width: SPACING}} />}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name || '레터링 케이크 가게이름'}</Text>
      {loading ? (
        renderSkeleton()
      ) : (
        <FlatList
          data={popularStores}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()} // Ensure id is a string
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
          ItemSeparatorComponent={() => <View style={{width: SPACING}} />}
        />
      )}
      <Text style={styles.sub}>최소 주문금액 20,000원</Text>
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
  sub: {
    fontSize: 12,
    // fontWeight: 'bold',
    marginTop: 10,
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
    borderWidth: 1,
    borderColor: '#d6d6d6',
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
  // Skeleton styles
  imageSkeleton: {
    width: '100%',
    height: '100%',
    backgroundColor: '#e0e0e0',
  },
  textSkeletonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(224, 224, 224, 0.8)', // Slightly transparent
    padding: 10,
  },
  textSkeletonLineShort: {
    width: '60%',
    height: 12,
    backgroundColor: '#c0c0c0',
    borderRadius: 4,
    marginBottom: 6,
  },
  textSkeletonLineLong: {
    width: '80%',
    height: 12,
    backgroundColor: '#c0c0c0',
    borderRadius: 4,
  },
});

export default Popular;
