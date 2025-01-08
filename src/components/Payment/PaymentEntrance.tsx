import {useNavigation} from '@react-navigation/native';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {NavigationProp} from '../../navigation/type';

export default function PaymentEntance() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <View style={{marginBottom: 10}}>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>주문정보</Text>
          </View>

          <View
            style={{
              ...styles.menuBox,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={{width: '90%'}}>
              <Text style={{fontWeight: 'bold', marginBottom: 6}}>
                스타벅스 강남역점
              </Text>
              <Text style={{marginBottom: 0, fontSize: 12, color: '#a3a3a3'}}>
                서울특별시 강남구 강남대로 123
              </Text>
            </View>
            <View style={{minWidth: 30}}>
              <TouchableOpacity onPress={() => navigation.navigate('Map')}>
                <MaterialIcons name="map" size={25} color="black" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.menuBox}>
            <Text style={{fontWeight: 'bold', marginBottom: 10}}>
              메인메뉴명
            </Text>
            <View>
              <Text style={styles.subText}>서브 선택메뉴 1</Text>
              <Text style={styles.subText}>서브 선택메뉴 1</Text>
              <Text style={styles.subText}>서브 선택메뉴 1</Text>
              <Text style={styles.subText}>서브 선택메뉴 1</Text>
              <Text style={styles.subText}>서브 선택메뉴 1</Text>
              <Text style={styles.subText}>서브 선택메뉴 1</Text>
              <Text style={styles.subText}>서브 선택메뉴 1</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={{backgroundColor: 'white', height: 60, padding: 10}}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('PaymentModule')}>
          <Text style={styles.text}>주문하기</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  menuBox: {
    backgroundColor: 'white',
    borderColor: '#dfdfdf',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  subText: {
    marginTop: 5,
    marginBottom: 5,
    color: '#a3a3a3',
    fontSize: 10,
    marginLeft: 10,
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
