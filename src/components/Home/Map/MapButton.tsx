import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Platform,
} from 'react-native';
import {NavigationProp} from '../../../navigation/type';

function MapButton() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.rowContainer}>
          <TouchableOpacity
            style={styles.touchableOpacity}
            onPress={() => navigation.navigate('Map')}>
            <View style={styles.imageWrapper}>
              <Image
                source={require('../../../image/map.png')}
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
          <View style={styles.alertContainer}>
            <Image
              source={require('../../../image/alert.png')}
              resizeMode="cover"
              style={styles.alertImage}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingBottom: 5,
    paddingTop: 5,
    height: 160,
  },
  body: {
    padding: 10,
    height: '100%',
    justifyContent: 'center', // 중앙 정렬로 변경
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', // 세로 중앙 정렬 추가
    height: '100%',
  },
  touchableOpacity: {
    width: '70%',
    borderRadius: 10,
    overflow: 'hidden', // borderRadius 적용을 위해 추가
  },
  imageWrapper: {
    flex: 1,
    position: 'relative',
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
    // borderRadius: 10, // 부모 View에 적용하므로 제거
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
  alertContainer: {
    borderWidth: 1,
    borderColor: '#dfdfdf',
    width: 90,
    height: '100%',
    borderRadius: 10,
    backgroundColor: '#fff',
    justifyContent: 'center', // 아이콘 중앙 정렬
    alignItems: 'center',
    overflow: 'hidden', // borderRadius 적용을 위해 추가
  },
  alertImage: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  },
});

export default MapButton;
