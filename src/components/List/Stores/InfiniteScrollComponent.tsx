import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

import {StoreList} from '../popular';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '../../../navigation/type';

const ITEMS_PER_LOAD = 5;

const InfiniteScrollComponent = () => {
  const navigation = useNavigation<NavigationProp>();
  const allData = StoreList;

  const [displayedData, setDisplayedData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    loadMoreData();
  }, []);

  const loadMoreData = () => {
    if (loading) return;
    if (displayedData.length >= allData.length) return;

    setLoading(true);
    setTimeout(() => {
      const start = (page - 1) * ITEMS_PER_LOAD;
      const end = start + ITEMS_PER_LOAD;
      const newData = allData.slice(start, end);
      setDisplayedData([...displayedData, ...newData]);
      setPage(page + 1);
      setLoading(false);
    }, 1000);
  };

  const renderProducts = ({item}) => {
    return (
      <View
        // onPress={() => navigation.navigate('Detail', item)}
        style={styles.productContainer}
        // activeOpacity={0.8}
      >
        <Image source={item.image} style={styles.image} resizeMode="cover" />
        <View style={styles.textContainer}>
          <Text style={styles.storeName}>{item.name}</Text>
          <Text style={styles.storePrice}>{item.price}</Text>
        </View>
      </View>
    );
  };

  const renderItem = ({item}) => {
    return (
      <>
        <TouchableOpacity
          style={styles.storeContainer}
          onPress={() => navigation.navigate('Detail', item)}
          activeOpacity={0.8}>
          <Text style={styles.storeTitle}>{item.title}</Text>

          <FlatList
            data={item.products}
            renderItem={renderProducts}
            keyExtractor={product => product.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.listContent}
            ItemSeparatorComponent={() => <View style={{width: 10}} />}
          />
        </TouchableOpacity>
        <View style={{padding: 10}}>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: '#ccc',
            }}
          />
        </View>
      </>
    );
  };

  const renderFooter = () => {
    if (!loading) return null;
    return (
      <View style={styles.footer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  };

  return (
    <FlatList
      data={displayedData}
      renderItem={renderItem}
      keyExtractor={store => store.title}
      onEndReached={loadMoreData}
      onEndReachedThreshold={0.5}
      ListFooterComponent={renderFooter}
    />
  );
};

const styles = StyleSheet.create({
  storeContainer: {
    padding: 10,
  },
  storeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productContainer: {
    width: 150, // 고정된 너비 설정
    height: 200, // 고정된 높이 설정
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '80%', // 이미지가 컨테이너의 80%를 차지하도록
  },
  textContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 5,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  storeName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  storePrice: {
    color: '#fff',
    fontSize: 12,
    marginTop: 2,
  },
  footer: {
    padding: 10,
    alignItems: 'center',
  },
  listContent: {
    paddingRight: 15,
  },
});

export default InfiniteScrollComponent;
