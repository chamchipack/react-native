import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {dummy} from '../dummy';
import Category from './Category';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '../../../navigation/type';

const Body = () => {
  const navigation = useNavigation<NavigationProp>();

  const contents = dummy;

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.leftColumn}>
          {contents.map((item, index) => (
            <Category key={item.id} item={item} index={index} />
          ))}
        </View>
        <View style={styles.rightColumn}>
          <TouchableOpacity
            style={styles.touchableOpacity}
            onPress={() => navigation.navigate('Map')}>
            <View style={styles.imageWrapper}>
              <Image
                source={require('../../../image/map.png')} // 이미지 경로 확인
                resizeMode="cover"
                style={styles.image}
              />
              <View style={styles.overlay}>
                <Text style={styles.overlayText}>
                  내 주변에 등록된 가게 살펴보기!
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 5,
    marginBottom: 10,
  },
  box: {
    flexDirection: 'row',
    flexWrap: 'nowrap', // 줄바꿈 방지
    backgroundColor: 'white',
    padding: 20,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 3,
    borderRadius: 15,
    height: 200, // 부모 높이 명확히 설정
  },
  leftColumn: {
    width: '50%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  rightColumn: {
    width: '50%',
    height: '100%', // 부모 높이에 맞추기
    paddingLeft: 10,
  },
  touchableOpacity: {
    flex: 1,
    borderRadius: 10,
    overflow: 'hidden', // borderRadius 적용을 위해 추가
  },
  imageWrapper: {
    flex: 1,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%', // 부모 높이에 맞추기
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 10,
  },
});

export default Body;
