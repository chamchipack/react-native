// components/CustomImage.js
import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

function CustomImage() {
  const navigation = useNavigation();

  return (
    <View style={styles.imageContainer}>
      <Image
        source={require('../../image/olive.jpeg')}
        style={styles.image}
        resizeMode="cover"
      />
      <TouchableOpacity
        style={styles.overlayIcon}
        onPress={() => navigation.goBack()}
        accessibilityLabel="Go to List"
        accessibilityRole="button">
        <MaterialIcons name="arrow-back-ios-new" size={20} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    height: 240,
    backgroundColor: 'red',
    // borderRadius: 10, // 모서리 둥글게
    overflow: 'hidden', // 자식 요소가 넘치지 않도록
    // borderBottomWidth: 1, // 하단 테두리만 설정
    // borderBottomColor: '#dfdfdf',
    position: 'relative', // 오버레이 아이콘을 절대 위치로 배치하기 위해
  },
  image: {
    width: '100%',
    height: '100%',
  },
  overlayIcon: {
    position: 'absolute',
    top: 10, // 이미지 상단에서 10px 떨어진 위치
    left: 10, // 이미지 좌측에서 10px 떨어진 위치
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // 아이콘 배경 반투명 흰색
    borderRadius: 15, // 배경을 원형으로 만듦
    padding: 5, // 아이콘 주위에 패딩 추가
  },
});

export default CustomImage;
