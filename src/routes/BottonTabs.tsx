import { Home } from '@/app/Home';
import { Product } from '@/app/Product';
import { createBottomTabNavigator, BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

//as props são undefined pq product screen não tem um parâmetro obrigatório
export type TabRouterList = {
  home: undefined;
  product: undefined | { id: string };
};

export type TabRoutesProps<T extends keyof TabRouterList> = BottomTabScreenProps<TabRouterList, T>;

//cria o navegador de abas
const Tab = createBottomTabNavigator<TabRouterList>();

export function TabRouter() {
  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#2C46B1',
        tabBarInactiveTintColor: '#444444',
        tabBarLabelPosition: 'beside-icon',
      }}
    >
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarLabel: 'inicio',
          tabBarIcon: ({ color, size }) => <MaterialIcons name="home" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="product"
        component={Product}
        options={{
          tabBarLabel: 'inicio',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="add-circle" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
