import { NavigationContainer } from '@react-navigation/native';
import { StackRouter } from './StackRoutes';
import { TabRouter } from './BottonTabs';
import { DrawerRoutes } from './DrawerRoutes';

export function Routes() {
  return (
    <NavigationContainer>
      <DrawerRoutes />
    </NavigationContainer>
  );
}
