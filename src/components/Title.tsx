import { Text, TextProps } from 'react-native';

type Title = TextProps & {
  children: string;
};

export function Title({ children, ...rest }: Title) {
  return (
    <Text style={{ fontSize: 28, fontWeight: '700' }} {...rest}>
      {children}
    </Text>
  );
}
