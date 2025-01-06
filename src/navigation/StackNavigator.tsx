import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screen/Home';
import ListScreen from '../screen/List';
import DetailScreen from '../screen/Detail';
import MapScreen from '../screen/Map';
import UploadScreen from '../screen/Upload';
import {RootStackParamList} from './type';

const Stack = createNativeStackNavigator<RootStackParamList>();
/**
 * @description 내비게이션 관리 컴포넌트
 */
export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="List" component={ListScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
      <Stack.Screen name="Map" component={MapScreen} />
      <Stack.Screen name="Upload" component={UploadScreen} />
    </Stack.Navigator>
  );
}
