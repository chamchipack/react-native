import {StyleSheet, View} from 'react-native';
import InfiniteScrollComponent from './Test';
import Payment from '../components/Payment/Payment';

function Upload(props) {
  return (
    <View style={styles.container}>
      <InfiniteScrollComponent />
      {/* <Payment navigation={props.navigation} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});
export default Upload;
