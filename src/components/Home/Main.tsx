import {StyleSheet, View} from 'react-native';
import Header from './Header/Header';
import Body from './Categories/Body';
import Reservation from './Reservation/Reservation';
import Place from './Place';
import Popular from './Popular';

export default function Main() {
  return (
    <>
      <Header />
      <Body />
      <Reservation />
      <View style={styles.space}></View>
      <Place />
      <View style={styles.space}></View>
      <Popular />
    </>
  );
}

const styles = StyleSheet.create({
  space: {
    height: 10,
    width: '100%',
  },
});
