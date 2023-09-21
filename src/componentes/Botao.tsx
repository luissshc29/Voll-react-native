import { Button, IButtonProps} from 'native-base'
import { ReactNode } from 'react'

interface BotaoPops extends IButtonProps {
    children: ReactNode
}


export default function Botao({children, ...rest}: BotaoPops) {
  return (
        <Button
            width={'100%'}
            borderRadius={'lg'}
            bgColor='blue.800'
            color={'white'}
            mt={7}
            {...rest}
        >
            {children}
        </Button>
  )
}
