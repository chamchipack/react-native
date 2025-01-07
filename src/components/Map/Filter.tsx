import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function Filter() {
  return (
    <View style={styles.container}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
        }}>
        <TouchableOpacity style={styles.chip} activeOpacity={0.5}>
          <Text style={styles.chipText}>카테고리</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.chip} activeOpacity={0.5}>
          <Text style={styles.chipText}>필터2</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.chip} activeOpacity={0.5}>
          <Text style={styles.chipText}>필터3</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FCF7FA',
    height: 50,
    padding: 10,
  },
  chip: {
    width: 70,
    borderRadius: 20,
    borderColor: '964F66',
    borderWidth: 0.2,
    paddingTop: 5,
    paddingBottom: 5,
    paddingHorizontal: 8,
    backgroundColor: '#F2E8EB',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  chipText: {
    color: '#1C0D12',
    fontSize: 12,
  },
});
