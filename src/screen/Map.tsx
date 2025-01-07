import {StyleSheet, View} from 'react-native';
import Image from '../components/Map/Image';
import Navermap from '../components/Map/Navermap';
import Filter from '../components/Map/Filter';

function Map() {
  return (
    <View style={styles.container}>
      <Filter />
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
