import { ITextProps, Text } from "native-base";
import { ReactNode } from "react";

interface TituloPops extends ITextProps {
    children: ReactNode
}

export default function Titulo({children, ...rest} : TituloPops) {
  return (
        <Text 
            fontSize='2xl' 
            fontWeight='bold' 
            textAlign='center'
            marginTop={5}
            {...rest}
        >
            {children}
        </Text>
  )
}
