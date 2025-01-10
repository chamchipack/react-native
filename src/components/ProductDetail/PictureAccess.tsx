import {Image, Platform, Pressable, StyleSheet, View} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import {PermissionsAndroid} from 'react-native';
import {useCallback, useState} from 'react';
import {DemoResponse} from '../../screen';
import {Text} from 'react-native-elements';

async function requestPermissions() {
  if (Platform.OS === 'android') {
    try {
      const granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.CAMERA,
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      ]);

      if (
        granted['android.permission.CAMERA'] ===
          PermissionsAndroid.RESULTS.GRANTED &&
        granted['android.permission.READ_EXTERNAL_STORAGE'] ===
          PermissionsAndroid.RESULTS.GRANTED
      ) {
        console.log('모든 권한 허용됨');
      } else {
        console.log('권한 거부됨');
      }
    } catch (err) {
      console.warn(err);
    }
  }
}

const includeExtra = true;

export default function PictureAccess() {
  const [response, setResponse] = useState<any>(null);

  const onButtonPress = useCallback((type, options) => {
    console.log(type, options);
    if (type === 'capture') {
      ImagePicker.launchCamera(options, setResponse);
    } else {
      ImagePicker.launchImageLibrary(options, setResponse);
    }
  }, []);

  return (
    <View>
      {actions.map(({title, type, options}) => {
        return (
          <Pressable key={title} onPress={() => onButtonPress(type, options)}>
            <Text>{title}</Text>
          </Pressable>
        );
      })}

      <DemoResponse>{response}</DemoResponse>

      {response?.assets &&
        response?.assets.map(({uri}: {uri: string}) => (
          <View key={uri} style={styles.imageContainer}>
            <Image
              resizeMode="cover"
              resizeMethod="scale"
              style={styles.image}
              source={{uri: uri}}
            />
          </View>
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aliceblue',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 8,
  },
  imageContainer: {
    marginVertical: 24,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
});

interface Action {
  title: string;
  type: 'capture' | 'library';
  options: ImagePicker.CameraOptions | ImagePicker.ImageLibraryOptions;
}

const actions: Action[] = [
  {
    title: 'Take Image',
    type: 'capture',
    options: {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
      includeExtra,
    },
  },
  {
    title: 'Select Image',
    type: 'library',
    options: {
      selectionLimit: 0,
      mediaType: 'photo',
      includeBase64: false,
      includeExtra,
    },
  },
];
