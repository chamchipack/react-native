import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import HomeScreen from '../screen/Home'; // 예시: 자신의 HomeScreen 경로에 맞춰 import
import ListScreen from '../screen/List';
import Detail from '../screen/Detail';
import Map from '../screen/Map';
import Upload from '../screen/Upload';
import Navbar from './Navbar';

const Stack = createNativeStackNavigator();

function MainNavigator() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="List"
            component={ListScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Detail"
            component={Detail}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Map"
            component={Map}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Upload"
            component={Upload}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
        <Navbar />
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default MainNavigator;
