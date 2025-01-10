import {StyleSheet, View} from 'react-native';
import Payment from '../components/Payment/Payment';
import {useNavigation} from '@react-navigation/native';

function PaymentModuleScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Payment navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});
export default PaymentModuleScreen;
