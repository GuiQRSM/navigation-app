import { ButtonRouter } from '@/components/ButtonIcon';
import { Header } from '@/components/Header';
import { Title } from '@/components/Title';
import { View } from 'react-native';
import { StackRouterList } from '../routes/StackRoutes';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<StackRouterList, 'home'>;

export function Home({ navigation }: Props) {
  return (
    <View style={{ flex: 1, padding: 32, paddingTop: 54 }}>
      <Header>
        <Title>Home</Title>
        <ButtonRouter name="add-circle" onPress={() => navigation.navigate('product')} />
      </Header>
    </View>
  );
}
