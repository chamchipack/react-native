import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
function Head() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons
              name="arrow-back-ios-new"
              size={20}
              color="black"
              style={{marginLeft: 3}}
            />
          </TouchableOpacity>
          <Text style={{marginLeft: 10, fontWeight: 'bold'}}>
            경기도 수원시
          </Text>
        </View>

        <View style={styles.header}>
          <MaterialIcons
            name="search"
            size={20}
            color="black"
            style={{marginLeft: 3}}
          />
          <MaterialIcons
            name="cases"
            size={20}
            color="black"
            style={{marginLeft: 10}}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default Head;
