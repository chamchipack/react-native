import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {NavigationProp} from '../../../navigation/type';
import Input from './Input';

const Head = () => {
  const navigation = useNavigation<NavigationProp>();

  const controlTextLength = (text: string, limit: number) => {
    return text.length > limit ? `${text.slice(0, 20)}...` : text;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.header}>
          <Text style={styles.title}>
            {controlTextLength('경기도 수원시 영통구 영통로525번길 35', 20)}
          </Text>
          <MaterialIcons
            name="arrow-drop-down"
            size={30}
            color="black"
            style={{marginLeft: 3}}
          />
        </View>

        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Upload')}
            style={styles.iconContainer}>
            <MaterialIcons
              name="cases"
              size={20}
              color="black"
              style={{marginLeft: 10}}
            />
          </TouchableOpacity>
        </View>
      </View>

      <Input />
    </View>
  );
};

export default Head;

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
  },
  container: {
    padding: 20,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconContainer: {
    padding: 5, // 아이콘 주변 패딩
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});
