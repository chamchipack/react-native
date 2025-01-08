import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function Profile() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{marginBottom: 10}}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>나의 정보</Text>
        </View>

        <View
          style={{
            ...styles.menuBox,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{width: '40%'}}>
            <Text style={{fontWeight: 'bold', marginBottom: 6}}>조찬익</Text>
          </View>
          <View style={{minWidth: 30}}>
            <Text>010-7650-7023</Text>
          </View>
        </View>

        <View
          style={{
            ...styles.menuBox,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{width: '40%'}}>
            <Text style={{fontWeight: 'bold', marginBottom: 6}}>
              현재 예약정보
            </Text>
          </View>
          <View style={{minWidth: 30}}>
            <TouchableOpacity>
              <MaterialIcons name="arrow-right" size={35} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            ...styles.menuBox,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{width: '40%'}}>
            <Text style={{fontWeight: 'bold', marginBottom: 6}}>결제 내역</Text>
          </View>
          <View style={{minWidth: 30}}>
            <TouchableOpacity>
              <MaterialIcons name="arrow-right" size={35} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
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
});
