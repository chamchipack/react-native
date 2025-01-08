import {useNavigation} from '@react-navigation/native';
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationProp} from '../../navigation/type';

function Body({...props}) {
  const navigation = useNavigation<NavigationProp>();

  const data = props?.data;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>스타벅스 강남역점 {data.title}</Text>
      <Text style={styles.sub}>서울특별시 강남구 강남대로 21</Text>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          marginTop: 10,
        }}>
        <TouchableOpacity style={styles.chip} activeOpacity={0.5}>
          <Text style={styles.chipText}>가게정보</Text>
        </TouchableOpacity>
        <Text style={{...styles.general, marginLeft: 10}}>리뷰 20개</Text>
      </View>

      <View style={styles.division} />

      {data?.products.map((item: any) => (
        <TouchableOpacity
          key={item.id}
          onPress={() => {
            console.log('sdf');
            navigation.navigate('ProductDetail', {productId: item.id});
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              // alignItems: 'center',
              marginTop: 20,
              height: 100,
            }}>
            <View
              style={{
                borderWidth: 1,
                borderColor: '#dfdfdf',
                width: 100,
                height: '100%',
                borderRadius: 10,
                backgroundColor: '#dfdfdf',
              }}
            />
            <View
              style={{
                marginLeft: 10,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                paddingTop: 5,
                paddingBottom: 5,
              }}>
              <View>
                <Text
                  style={{fontWeight: 'bold', fontSize: 16, color: '#4c4d4c'}}>
                  {item?.name || '상품이름 들어가는 곳'}
                </Text>

                <Text
                  style={{
                    fontSize: 10,
                    color: '#b1b5b4',
                    marginTop: 4,
                  }}>
                  상품 설명에 대한 기입
                </Text>
              </View>

              <Text
                style={{
                  fontSize: 14,
                  color: '#000000',
                  marginTop: 4,
                }}>
                {item?.price || '20,000원'}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Payment', {orderId: 'aa'})}>
        <Text style={styles.text}>주문하기</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  division: {
    borderBottomWidth: 1,
    borderBottomColor: '#dfdfdf',
    marginTop: 20,
    marginBottom: 20,
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
    color: '#333', // 어두운 글씨색
    fontSize: 12, // 글씨 크기
  },
  button: {
    width: '100%', // 가로 크기 100%
    height: 40, // 높이 40
    backgroundColor: '#964F66', // 버튼 색상
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4, // 모서리 살짝 둥글게
    marginTop: 10,
  },
  text: {
    color: '#FFFFFF', // 텍스트 흰색
    fontSize: 16, // 글자 크기
    fontWeight: 'bold', // 텍스트 두께
  },
});

export default Body;
