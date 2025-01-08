import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, View, Text, TouchableOpacity} from 'react-native';

function Banner() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.body}>
          <Image
            source={require('../../image/banner.png')}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 150,
    marginTop: 10,
    marginBottom: 10,
  },
  body: {
    borderColor: 'white',
    backgroundColor: 'white',
    height: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1, // 그림자의 방향을 상단이 아니라 아래로 설정하려면 1로 유지
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 5, // Android 그림자
    overflow: 'hidden', // borderRadius가 적용되도록 설정
  },
  image: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // 반투명 검은색 오버레이
    justifyContent: 'center', // 텍스트를 수직 중앙에 배치
    alignItems: 'center', // 텍스트를 수평 중앙에 배치
  },
  overlayText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 10, // 텍스트 주변 여백
  },
});

export default Banner;
