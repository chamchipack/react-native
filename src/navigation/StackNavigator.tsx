// navigation/StackNavigator.tsx
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screen/HomeScreen';
import StoreListScreen from '../screen/StoreListScreen';
import StoreDetailScreen from '../screen/StoreDetailScreen';
import ProductDetailScreen from '../screen/ProductDetailScreen';
import PaymentScreen from '../screen/PaymentScreen';
import MapScreen from '../screen/MapScreen';
import ProfileScreen from '../screen/ProfileScreen';
import PaymentHistoryScreen from '../screen/PaymentHistoryScreen';
import PaymentModuleScreen from '../screen/PaymentModuleScreen';
import {RootStackParamList} from './type';
import UploadScreen from '../screen/Upload';

const Stack = createNativeStackNavigator<RootStackParamList>();

/**
 * @description 네비게이션 관리 컴포넌트
 *
 * Home - 메인 화면
 * StoreList - 상점 리스트 화면
 * StoreDetail - 상점 상세 화면
 * ProductDetail - 상품 세부 설정 화면
 * Payment - 결제 화면
 * Map - 지도 화면
 * Profile - 마이페이지 화면
 * PaymentHistory - 결제 내역 화면
 * Upload - 업로드 화면
 */
export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="StoreList" component={StoreListScreen} />
      <Stack.Screen name="StoreDetail" component={StoreDetailScreen} />
      <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
      <Stack.Screen name="Payment" component={PaymentScreen} />
      <Stack.Screen name="Map" component={MapScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="PaymentHistory" component={PaymentHistoryScreen} />
      <Stack.Screen name="PaymentModule" component={PaymentModuleScreen} />
      <Stack.Screen name="Upload" component={UploadScreen} />
    </Stack.Navigator>
  );
}
