import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type ListProps = {
  id: string;
  name: string;
  image: any;
};

export type RootStackParamList = {
  Home: undefined;
  Upload: undefined;
  List: ListProps;
  Detail: undefined;
  Map: undefined;
};

export type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
