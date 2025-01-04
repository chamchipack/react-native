import {StyleSheet, View} from 'react-native';
import Image from '../components/Detail/Image';
import Body from '../components/Detail/Body';

function Detail() {
  return (
    <View style={styles.container}>
      <Image />
      <Body />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});
export default Detail;
