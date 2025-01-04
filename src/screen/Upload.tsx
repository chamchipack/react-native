import {StyleSheet, View} from 'react-native';
import InfiniteScrollComponent from './Test';
function Upload() {
  return (
    <View style={styles.container}>
      <InfiniteScrollComponent />
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
