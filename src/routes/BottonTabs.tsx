import { Home } from '@/app/Home';
import { Product } from '@/app/Product';
import { createBottomTabNavigator, BottomTabScreenProps } from '@react-navigation/bottom-tabs';

//as props são undefined pq product screen não tem um parâmetro obrigatório
export type TabRouterList = {
  home: undefined;
  product: undefined | { id: string };
};

export type TabRoutesProps<T extends keyof TabRouterList> = BottomTabScreenProps<TabRouterList, T>;

const Tab = createBottomTabNavigator<TabRouterList>();

export function TabRouter() {
  return (
    <Tab.Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="product" component={Product} />
    </Tab.Navigator>
  );
}
