import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const screenWidth = Dimensions.get('window').width;
const numColumns = 5;
const spacing = 15;
const itemWidth = (screenWidth - 40 - spacing * (numColumns - 1)) / numColumns;

import {dummy} from './dummy';

const Body = () => {
  const navigation = useNavigation();
  const contents = dummy;

  return (
    <View>
      <View style={styles.container}>
        {contents.map((item, index) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => navigation.navigate('List', {item})}
            style={[
              styles.itemContainer,
              {
                width: itemWidth,
                marginRight: (index + 1) % numColumns === 0 ? 0 : spacing,
              },
            ]}>
            <View style={styles.imageContainer}>
              <Image
                source={item.image}
                style={styles.image}
                resizeMode="cover"
              />
            </View>
            <Text style={styles.itemText}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
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

    elevation: 5,
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

export default Body;
