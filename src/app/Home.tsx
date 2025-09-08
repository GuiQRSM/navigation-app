import { ButtonIcon } from '@/components/ButtonIcon';
import { Header } from '@/components/Header';
import { Title } from '@/components/Title';
import { View } from 'react-native';
import { StackRoutesProps } from '@/routes/StackRoutes';
import { TabRoutesProps } from '@/routes/BottonTabs';

export function Home({ navigation }: TabRoutesProps<'home'>) {
  return (
    <View style={{ flex: 1, padding: 32, paddingTop: 54 }}>
      <Header>
        <Title>Home</Title>
        <ButtonIcon
          name="add-circle"
          onPress={() => navigation.navigate('product', { id: '456' })}
        />
      </Header>
    </View>
  );
}
