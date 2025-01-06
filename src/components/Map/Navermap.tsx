import {
  NaverMapView,
  NaverMapMarkerOverlay,
} from '@mj-studio/react-native-naver-map';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const position = {
  latitude: 37.50497126,
  longitude: 127.04905021,
  latitudeDelta: 0.05,
  longitudeDelta: 0.05,
};

interface ClusterMarkerProp extends Coord {
  identifier: string;
  image?: MarkerImageProp;
  width?: number;
  height?: number;
}
export interface Coord {
  /** 위도 */
  latitude: number;
  /** 경도 */
  longitude: number;
}

const Cluster = [
  {
    markers: [
      {
        identifier: 'marker1',
        latitude: position.latitude + 0.01, // position 근방
        longitude: position.longitude + 0.013,
      },
      {
        identifier: 'marker2',
        latitude: position.latitude - 0.001,
        longitude: position.longitude - 0.002,
      },
      {
        identifier: 'marker3',
        latitude: position.latitude + 0.024,
        longitude: position.longitude - 0.021,
      },
      {
        identifier: 'marker4',
        latitude: position.latitude - 0.003,
        longitude: position.longitude + 0.002,
      },
    ],
  },
];
interface clusters {
  width?: number;
  height?: number;
  markers: ClusterMarkerProp[];
  screenDistance?: number;
  minZoom?: number;
  maxZoom?: number;
  animate?: boolean;
}

function Navermap() {
  const navigation = useNavigation();

  return (
    <View style={styles.imageContainer}>
      <TouchableOpacity
        style={styles.overlayIcon}
        onPress={() => navigation.goBack()}
        accessibilityLabel="Go to List"
        accessibilityRole="button">
        <MaterialIcons name="arrow-back-ios-new" size={20} color="black" />
      </TouchableOpacity>
      <NaverMapView
        style={{flex: 1}}
        onInitialized={() => {
          return console.log('initialized!');
        }}
        initialRegion={position}
        clusters={Cluster}>
        <NaverMapMarkerOverlay
          image={require('../../image/olive.jpeg')}
          latitude={position.latitude}
          longitude={position.longitude}></NaverMapMarkerOverlay>
      </NaverMapView>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    height: '100%',
    overflow: 'hidden',
    position: 'relative',
  },
  overlayIcon: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 15,
    padding: 5,
    zIndex: 999,
  },
});

export default Navermap;
