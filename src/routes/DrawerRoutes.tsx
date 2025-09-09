import { Home } from '@/app/Home';
import { Product } from '@/app/Product';
import { createDrawerNavigator, DrawerScreenProps } from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons';

//as props são undefined pq product screen não tem um parâmetro obrigatório
export type DrawerRouterList = {
  home: undefined;
  product: undefined | { id: string };
};

export type DrawerRoutesProps<T extends keyof DrawerRouterList> = DrawerScreenProps<
  DrawerRouterList,
  T
>;

//cria o navegador de abas
const Drawer = createDrawerNavigator<DrawerRouterList>();

export function DrawerRoutes() {
  return (
    <Drawer.Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: '#2C46B1',
        drawerInactiveTintColor: '#444444',
      }}
    >
      <Drawer.Screen
        name="home"
        component={Home}
        options={{
          drawerLabel: 'produto',
          drawerIcon: ({ color, size }) => <MaterialIcons name="home" color={color} size={size} />,
        }}
      />
      <Drawer.Screen
        name="product"
        component={Product}
        options={{
          drawerLabel: 'produto',
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="add-circle" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
