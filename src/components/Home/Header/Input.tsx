import {useState} from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function Input() {
  const [text, setText] = useState('');

  return (
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
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 15,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    // iOS 그림자
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Android 그림자
    elevation: 3,
  },
  iconContainer: {
    padding: 5,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 14,
    paddingLeft: 4,
    color: '#000', // 텍스트 색상 명시
  },
});
