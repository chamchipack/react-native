import {StyleSheet, View} from 'react-native';
import Header from './Header/Header';
import Body from './Categories/Body';
import Reservation from './Reservation/Reservation';
import Place from './Place';
import Popular from './Popular';
import MapButton from './Map/MapButton';

export default function Main() {
  return (
    <>
      <Header />
      <Body />
      <Reservation />
      <Place />
      <MapButton />
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
