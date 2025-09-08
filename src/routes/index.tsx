import { NavigationContainer } from '@react-navigation/native';
import { StackRouter } from './StackRoutes';

export function Routes() {
  return (
    <NavigationContainer>
      <StackRouter />
    </NavigationContainer>
  );
}
