import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {CheckBox} from 'react-native-elements';
import {NavigationProp} from '../../navigation/type';
import {useNavigation} from '@react-navigation/native';
import PictureAccess from './PictureAccess';

const ProductDetailContent = () => {
  const navigation = useNavigation<NavigationProp>();

  const [checkboxes, setCheckboxes] = useState({
    option1: false,
    option2: false,
    option3: false,
  });
  const [radioSelected, setRadioSelected] = useState('radio1');

  const handleCheckboxToggle = key => {
    setCheckboxes(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>레터링 케이크</Text>
      <Text style={styles.sub}>서울특별시 강남구 강남대로 21</Text>

      <View style={styles.divider} />
      {/* 체크박스 */}
      <View style={styles.box}>
        <CheckBox
          title={
            <Text style={{marginLeft: 5, fontWeight: 'bold', color: 'gray'}}>
              옵션 1
            </Text>
          }
          checked={checkboxes.option1}
          onPress={() => handleCheckboxToggle('option1')}
          containerStyle={styles.checkboxContainer}
          textStyle={styles.checkboxText}
          checkedIcon="check-box" // 체크된 상태의 Material Icon
          uncheckedIcon="check-box-outline-blank" // 체크되지 않은 상태의 Material Icon
          iconType="material"
        />
        <Text>+ 500원</Text>
      </View>

      <View style={styles.box}>
        <CheckBox
          title={
            <Text style={{marginLeft: 5, fontWeight: 'bold', color: 'gray'}}>
              옵션 2
            </Text>
          }
          checked={checkboxes.option2}
          onPress={() => handleCheckboxToggle('option2')}
          containerStyle={styles.checkboxContainer}
          textStyle={styles.checkboxText}
          checkedIcon="check-box" // 체크된 상태의 Material Icon
          uncheckedIcon="check-box-outline-blank" // 체크되지 않은 상태의 Material Icon
          iconType="material"
        />
        <Text>+ 500원</Text>
      </View>

      <View style={styles.box}>
        <CheckBox
          title={
            <Text style={{marginLeft: 5, fontWeight: 'bold', color: 'gray'}}>
              옵션 3
            </Text>
          }
          checked={checkboxes.option3}
          onPress={() => handleCheckboxToggle('option3')}
          containerStyle={styles.checkboxContainer}
          textStyle={styles.checkboxText}
          checkedIcon="check-box" // 체크된 상태의 Material Icon
          uncheckedIcon="check-box-outline-blank" // 체크되지 않은 상태의 Material Icon
          iconType="material"
        />
        <Text>+ 500원</Text>
      </View>

      <PictureAccess />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()} // goBack 호출
      >
        <Text style={styles.text}>상품 담기</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 15,
  },
  box: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
  },
  general: {
    fontSize: 14,
  },
  sub: {
    fontSize: 12,
    color: '#bababa',
    marginTop: 5,
  },
  divider: {
    borderWidth: 0.5,
    borderColor: '#dfdfdf',
    marginTop: 20,
    marginBottom: 20,
  },
  checkboxContainer: {
    backgroundColor: 'transparent', // 배경 제거
    borderWidth: 0, // 보더 제거
    margin: 0, // 추가 여백 제거
    padding: 0, // 기본 padding 제거
  },
  checkboxText: {
    fontSize: 16, // 텍스트 크기 조정 (필요에 따라 변경)
  },
  checkedIcon: {
    fontSize: 18,
  },
  uncheckedIcon: {
    fontSize: 18,
    color: 'gray', // 체크되지 않은 아이콘 색상
  },
  button: {
    width: '100%', // 가로 크기 100%
    height: 40, // 높이 40
    backgroundColor: '#964F66', // 버튼 색상
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4, // 모서리 살짝 둥글게
  },
  text: {
    color: '#FFFFFF', // 텍스트 흰색
    fontSize: 16, // 글자 크기
    fontWeight: 'bold', // 텍스트 두께
  },
});

export default ProductDetailContent;
