import {Text, TextProps} from 'react-native'

type Title = TextProps & {
    children: string
}

export function Title({children, ...rest}: Title) {
   <Text style={{fontSize: 22, fontWeight: "700"}} {...rest}>
   {children}
   </Text>
}