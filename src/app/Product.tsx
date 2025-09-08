import { ButtonRouter } from '@/components/ButtonIcon';
import { Header } from '@/components/Header';
import { Title } from '@/components/Title';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import { StackRoutesProps } from '@/routes/StackRoutes';

export function Product({ navigation }: StackRoutesProps<'product'>) {
  return (
    <View style={{ flex: 1, padding: 32, paddingTop: 54 }}>
      <Header>
        <ButtonRouter name="arrow-circle-left" onPress={() => navigation.goBack()} />
        <Title>Product</Title>
      </Header>
    </View>
  );
}
