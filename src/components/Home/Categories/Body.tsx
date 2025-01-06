import React from 'react';
import {StyleSheet, View} from 'react-native';

import {dummy} from '../dummy';
import Category from './Category';

const Body = () => {
  const contents = dummy;

  return (
    <View>
      <View style={styles.container}>
        {contents.map((item, index) => (
          <Category key={item.id} item={item} index={index} />
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
  image: {
    width: '100%',
    height: '100%',
  },
});

export default Body;
