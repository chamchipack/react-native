import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ListProps, NavigationProp} from '../../../navigation/type';
import {useNavigation} from '@react-navigation/native';

const screenWidth = Dimensions.get('window').width;
const numColumns = 6; // 한 줄에 몇 개의 아이템
const spacing = 15; // 아이템 간 간격
const containerPadding = 20; // 좌우 여백
const itemWidth = 60;
// (screenWidth - containerPadding * 2 - spacing * (numColumns - 1)) /
// numColumns;

interface Props {
  item: ListProps;
  index: number;
}

export default function Category({item, index}: Props) {
  const navigation = useNavigation<NavigationProp>();

  return (
    <TouchableOpacity
      key={item.id}
      onPress={() => navigation.navigate('StoreList', item)}
      style={[
        styles.itemContainer,
        {
          width: itemWidth,
          marginRight: (index + 1) % numColumns === 0 ? 0 : spacing,
        },
      ]}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.image} resizeMode="cover" />
      </View>
      <Text style={styles.itemText}>{item.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    // marginBottom: 10,
    alignItems: 'center',
  },
  imageContainer: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  itemText: {
    marginTop: 8,
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
});
