import { Home } from '@/app/Home';
import { Product } from '@/app/Product';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

//as props são undefined pq product screen não tem um parâmetro obrigatório
export type StackRouterList = {
  home: undefined;
  product: undefined;
};

export type StackRoutesProps<T extends keyof StackRouterList> = NativeStackScreenProps<
  StackRouterList,
  T
>;

const Stack = createNativeStackNavigator<StackRouterList>();

export function StackRouter() {
  return (
    <Stack.Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="product" component={Product} />
    </Stack.Navigator>
  );
}
