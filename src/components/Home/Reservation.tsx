import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from 'react-native';

function Reservation() {
  return (
    <View style={styles.container}>
      <View style={{marginBottom: 10, marginLeft: 4}}>
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>나의 예약현황</Text>
      </View>

      <ImageBackground
        source={require('../../image/ticket2.png')}
        style={styles.image}
        resizeMode="cover">
        <View style={styles.body}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              height: 50,
              // marginLeft: 0,
              // marginTop: 10,
            }}>
            <View
              style={{
                borderWidth: 1,
                borderColor: '#dfdfdf',
                width: 50,
                height: '100%',
                borderRadius: 10,
                backgroundColor: '#fff', // 배경색 추가 (필요 시)
              }}
            />
            <View style={{marginLeft: 10}}>
              <Text style={styles.storeName}>스타벅스 강남점</Text>
              <Text style={styles.storeAddress}>
                경기도 성남시 수정구 성남대로1237번길 8-21 201호
              </Text>
            </View>
          </View>

          <View style={styles.bottomRow}>
            {/* <Text style={styles.cakeText}>레터링 케이크</Text> */}
            <Text style={styles.dateText}>2025. 01. 31 (월) 14:00</Text>
            <TouchableOpacity style={styles.chip} activeOpacity={0.5}>
              <Text style={styles.chipText}>예약 상세</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingBottom: 10,
    paddingTop: 10,
    height: 220, // 이미지와 내용이 잘 어우러지도록 높이 조정
    marginBottom: 30,
  },
  image: {
    flex: 1,
    borderRadius: 10,
    overflow: 'hidden',
  },
  body: {
    padding: 15,
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // 배경색과 투명도로 텍스트 가독성 향상
    justifyContent: 'space-between', // 내용이 이미지 내에서 적절히 배치되도록
  },
  storeName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#4c4d4c',
  },
  storeAddress: {
    fontSize: 10,
    color: 'black',
    marginTop: 4,
  },
  cakeText: {
    fontSize: 12,
    color: '#b1b5b4',
    marginTop: 10,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  dateText: {
    fontSize: 12,
    color: '#4c4d4c',
  },
  chip: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 8,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chipText: {
    color: '#333',
    fontSize: 12,
  },
});

export default Reservation;
