import { ButtonIcon } from '@/components/ButtonIcon';
import { Header } from '@/components/Header';
import { Title } from '@/components/Title';
import { View } from 'react-native';
// imports of all types of screen navigation
import { StackRoutesProps } from '@/routes/StackRoutes';
import { TabRoutesProps } from '@/routes/BottonTabs';
import { DrawerRoutesProps } from '@/routes/DrawerRoutes';

export function Home({ navigation }: DrawerRoutesProps<'home'>) {
  return (
    <View style={{ flex: 1, padding: 32, paddingTop: 54 }}>
      <Header>
        <ButtonIcon name="menu" onPress={() => navigation.toggleDrawer()} />
        <Title>Home</Title>
        <ButtonIcon
          name="add-circle"
          onPress={() => navigation.navigate('product', { id: '456' })}
        />
      </Header>
    </View>
  );
}
