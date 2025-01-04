import {StyleSheet, View} from 'react-native';
import Image from '../components/Map/Image';

function Map() {
  return (
    <View style={styles.container}>
      <Image />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});
export default Map;
