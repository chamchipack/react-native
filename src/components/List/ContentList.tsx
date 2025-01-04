import React, {useState, useRef, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const screenWidth = Dimensions.get('window').width;
const spacing = 15;
const itemWidth = (screenWidth - 40 - spacing * 6) / 5; // Adjusted for 7 items

import {dummy} from '../Home/dummy';

const ContentList = ({selectedId = ''}) => {
  const navigation = useNavigation();
  const [currentId, setCurrentId] = useState(selectedId || '');
  const contents = dummy;

  const flatListRef = useRef(null);

  useEffect(() => {
    if (currentId && flatListRef.current) {
      const index = contents.findIndex(item => item.id === currentId);
      if (index !== -1) {
        flatListRef.current.scrollToIndex({
          index,
          animated: true,
          viewPosition: 0.5,
        });
      }
    }
  }, [currentId, contents]);

  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => setCurrentId(item.id)}
      style={[
        styles.itemContainer,
        {
          width: itemWidth,
          marginRight: spacing,
          opacity: item.id === currentId ? 1 : 0.25,
        },
      ]}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.image} resizeMode="cover" />
      </View>
      <Text style={styles.itemText}>{item.name}</Text>
    </TouchableOpacity>
  );

  const getItemLayout = (data, index) => ({
    length: itemWidth + spacing,
    offset: (itemWidth + spacing) * index,
    index,
  });

  return (
    <FlatList
      ref={flatListRef}
      data={contents}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      horizontal
      contentContainerStyle={styles.container}
      showsHorizontalScrollIndicator={false}
      getItemLayout={getItemLayout}
      initialScrollIndex={contents.findIndex(item => item.id === currentId)}
      onScrollToIndexFailed={info => {
        const wait = new Promise(resolve => setTimeout(resolve, 500));
        wait.then(() => {
          flatListRef.current?.scrollToIndex({
            index: info.index,
            animated: true,
          });
        });
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 5,
  },
  itemContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  imageContainer: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#dfdfdf',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // Android 그림자
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  itemText: {
    marginTop: 8,
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
});

export default ContentList;
