import { NavigationContainer } from '@react-navigation/native';
import { StackRouter } from './StackRoutes';
import { TabRouter } from './BottonTabs';

export function Routes() {
  return (
    <NavigationContainer>
      <TabRouter />
    </NavigationContainer>
  );
}
