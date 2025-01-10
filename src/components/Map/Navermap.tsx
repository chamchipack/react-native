import {
  NaverMapView,
  NaverMapMarkerOverlay,
} from '@mj-studio/react-native-naver-map';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Geolocation from 'react-native-geolocation-service';
import {useEffect, useState} from 'react';
import {Platform, PermissionsAndroid} from 'react-native';

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

async function requestPermission() {
  try {
    if (Platform.OS === 'ios') {
      return await Geolocation.requestAuthorization('always');
    } else if (Platform.OS === 'android') {
      // Android에서는 권한 요청이 필요
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message:
              'This app needs access to your location for better functionality.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        console.log(granted);
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Location permission granted');
          return 'granted';
        } else {
          console.log('Location permission denied');
          return 'denied';
        }
      } catch (err) {
        console.warn(err);
        return 'error';
      }
    }
  } catch (e) {
    console.error('Permission request error:', e);
    return 'error';
  }
}

function Navermap() {
  const navigation = useNavigation();

  const [location, setLocation] = useState(null);
  const [deviceLocation, setDeviceLocation] = useState({
    latitude: 37.50497126,
    longitude: 127.04905021,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const result = await requestPermission();
        if (result === 'granted' && Platform.OS === 'ios') {
          try {
            Geolocation.getCurrentPosition(
              pos => {
                const {latitude, longitude, accuracy, altitude} = pos.coords;
                setLocation({latitude, longitude, accuracy, altitude});
              },
              error => {
                console.error('Geolocation error:', error);
              },
              {
                enableHighAccuracy: true,
                timeout: 15000,
                maximumAge: 10000,
              },
            );
          } catch (e) {
            console.log(e);
          }
        } else {
          console.warn('Location permission not granted');
        }
      } catch (e) {
        console.error('Error fetching location:', e);
      }
    };

    fetchLocation();
  }, []);

  useEffect(() => {
    try {
      if (location.longitude) {
        setDeviceLocation(prev => ({
          ...prev,
          longitude: location.longitude,
          latitude: location.latitude,
        }));
      }
    } catch {}
  }, [location]);

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
          // return console.log('initialized!');
        }}
        // initialRegion={position}
        region={deviceLocation}
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
