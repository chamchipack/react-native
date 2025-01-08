import {StyleSheet, View} from 'react-native';
import Payment from '../components/Payment/Payment';

function PaymentModuleScreen() {
  return (
    <View style={styles.container}>
      <Payment />
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
