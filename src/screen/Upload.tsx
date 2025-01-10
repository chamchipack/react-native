import {StyleSheet, View} from 'react-native';
import CameraComponent from './Camera';

function UploadScreen() {
  return (
    <View style={styles.container}>
      <CameraComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});
export default UploadScreen;
