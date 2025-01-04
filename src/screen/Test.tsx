import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

const TOTAL_ITEMS = 100;
const ITEMS_PER_LOAD = 10;

// 100개의 아이템을 생성하는 함수
const generateData = () => {
  const data = [];
  for (let i = 1; i <= TOTAL_ITEMS; i++) {
    data.push({id: i.toString(), title: `Item ${i}`});
  }
  return data;
};

const InfiniteScrollComponent = () => {
  const allData = generateData(); // 전체 데이터
  const [displayedData, setDisplayedData] = useState([]); // 현재 표시되는 데이터
  const [loading, setLoading] = useState(false); // 로딩 상태
  const [page, setPage] = useState(1); // 현재 페이지

  useEffect(() => {
    loadMoreData();
  }, []);

  const loadMoreData = () => {
    if (loading) return;
    if (displayedData.length >= allData.length) return; // 모든 데이터를 로드했으면 종료

    setLoading(true);
    // 비동기 로딩 시뮬레이션 (예: API 호출)
    setTimeout(() => {
      const start = (page - 1) * ITEMS_PER_LOAD;
      const end = start + ITEMS_PER_LOAD;
      const newData = allData.slice(start, end);
      setDisplayedData([...displayedData, ...newData]);
      setPage(page + 1);
      setLoading(false);
    }, 1000); // 1초 지연
  };

  const renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.title}</Text>
    </View>
  );

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
      keyExtractor={item => item.id}
      onEndReached={loadMoreData}
      onEndReachedThreshold={0.5} // 스크롤 끝에서 50% 남았을 때 호출
      ListFooterComponent={renderFooter}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 18,
  },
  footer: {
    padding: 10,
    alignItems: 'center',
  },
});

export default InfiniteScrollComponent;
