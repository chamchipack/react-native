import {StyleSheet, View} from 'react-native';
import PaymentEntance from '../components/Payment/PaymentEntrance';
function PaymentScreen() {
  return (
    <View style={styles.container}>
      <PaymentEntance />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FCF7FA',
    flex: 1,
  },
});
export default PaymentScreen;
