import {StyleSheet, View} from 'react-native';
import Image from '../components/Map/Image';
import Navermap from '../components/Map/Navermap';

function Map() {
  return (
    <View style={styles.container}>
      {/* <Image /> */}
      <Navermap />
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
