import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Head = () => {
  const navigation = useNavigation();

  const [text, setText] = useState('');

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

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="여기에 입력하세요"
          value={text}
          onChangeText={setText}
          returnKeyType="search"
        />
        <TouchableOpacity style={styles.iconContainer}>
          <MaterialIcons name="search" size={20} color="black" />
        </TouchableOpacity>
      </View>
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
  inputContainer: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 15,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  iconContainer: {
    padding: 5, // 아이콘 주변 패딩
  },
  input: {
    flex: 1, // 가능한 공간을 모두 차지
    height: 40, // 입력 필드 높이
    fontSize: 12, // 글자 크기
    paddingLeft: 4,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});
