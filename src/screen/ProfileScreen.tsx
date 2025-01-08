import {StyleSheet, View} from 'react-native';
import Reservation from '../components/Home/Reservation/Reservation';
import Profile from '../components/Profile/Profile';

function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Profile />
      {/* <Reservation /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FCF7FA',
    flex: 1,
  },
});
export default ProfileScreen;
