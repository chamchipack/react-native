// components/CustomImage.js
import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity, Text} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

function CustomImage() {
  const navigation = useNavigation();

  return (
    <View style={styles.imageContainer}>
      <Image
        source={require('../../image/examplemap.png')}
        style={styles.image}
        resizeMode="cover"
      />
      <TouchableOpacity
        style={styles.overlayIcon}
        onPress={() => navigation.navigate('Home')}
        accessibilityLabel="Go to List"
        accessibilityRole="button">
        <MaterialIcons name="arrow-back-ios-new" size={20} color="black" />
      </TouchableOpacity>

      <View style={styles.overlaySample}>
        <TouchableOpacity
          style={styles.overlayTest}
          onPress={() => navigation.navigate('Detail')}
          accessibilityLabel="Go to List"
          accessibilityRole="button">
          <MaterialIcons name="home" size={20} color="black" />
        </TouchableOpacity>
        <Text style={{fontWeight: 'bold'}}>HELLO</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    height: '100%',
    backgroundColor: 'red',
    overflow: 'hidden',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  overlayIcon: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 15,
    padding: 5,
  },
  overlaySample: {
    position: 'absolute',
    top: 100,
    left: 100,
    // backgroundColor: 'rgba(255, 255, 255, 0.9)',
    // borderRadius: 30,
    // padding: 10,
    // borderWidth: 1,
    // borderColor: '#dfdfdf',
  },
  overlayTest: {
    // position: 'absolute',
    // top: 100,
    // left: 100,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 30,
    padding: 12,
    borderWidth: 1,
    borderColor: '#dfdfdf',
  },
});

export default CustomImage;
