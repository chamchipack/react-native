import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import Navbar from './navigationbar/Navbar';
import StackNavigator from './StackNavigator';

function MainNavigator() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <StackNavigator />
        <Navbar />
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCF7FA',
  },
});
export default MainNavigator;
