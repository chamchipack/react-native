import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type ListProps = {
  id: string;
  name: string;
  image: any;
};

export type DetailProps = {
  id: string;
  name: string;
  price: number;
  image: any;
};

export type RootStackParamList = {
  Home: undefined;
  StoreList: ListProps;
  StoreDetail: {storeId: string};
  ProductDetail: {productId: string};
  Payment: {orderId: string};
  Map: undefined;
  Profile: undefined;
  PaymentHistory: undefined;
  PaymentModule: undefined;
  Upload: undefined;
};

export type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
