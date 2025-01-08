import {StyleSheet, View} from 'react-native';
import ProductDetailContent from '../components/ProductDetail/ProductDetailContent';
import Image from '../components/Detail/Image';

function ProductDetailScreen() {
  return (
    <View style={styles.container}>
      <Image />
      <ProductDetailContent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FCF7FA',
    flex: 1,
  },
});
export default ProductDetailScreen;
