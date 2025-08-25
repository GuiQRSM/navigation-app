import { View } from 'react-native';

export function Header({ children }: { children: React.ReactNode }) {
  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 24,
      }}
    >
      {children}
    </View>
  );
}
