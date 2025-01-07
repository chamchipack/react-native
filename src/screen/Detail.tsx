import {ScrollView, StyleSheet, View} from 'react-native';
import Image from '../components/Detail/Image';
import Body from '../components/Detail/Body';

function Detail(props: any) {
  const {params = {}} = props?.route;
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image />
        <Body data={params} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FCF7FA',
    flex: 1,
  },
});
export default Detail;
