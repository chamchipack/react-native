import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Navbar = () => {
  return (
    <View style={styles.nav}>
      <TouchableOpacity style={styles.navItem}>
        <MaterialIcons name="home" size={24} color="#333" />
        <Text style={styles.navText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <MaterialIcons name="search" size={24} color="#333" />
        <Text style={styles.navText}>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <MaterialIcons name="notifications" size={24} color="#333" />
        <Text style={styles.navText}>알림</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <MaterialIcons name="person" size={24} color="#333" />
        <Text style={styles.navText}>마이</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  nav: {
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#d9dbdb',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff', // 배경색 설정
    elevation: 5, // Android 그림자
  },
  navItem: {
    alignItems: 'center',
    width: '25%',
  },
  navText: {
    fontSize: 12,
    color: '#333',
    marginTop: 4, // 아이콘과 텍스트 간 간격
  },
});

export default Navbar;
