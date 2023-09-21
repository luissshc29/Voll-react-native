import {Box} from 'native-base'
import InputComponent from './InputComponent'
import Botao from './Botao'

export default function ContainerBusca() {
  return (
    <Box marginY={3} alignItems={'center'} bgColor={'gray.100'} shadow={2} py={3} px={4} borderRadius={'xl'}>   
        <InputComponent placeholder='Digite a especialidade ...'/>
        <InputComponent placeholder='Digite sua localização ...'/>
        <Botao width={'auto'} px={'40%'}>Buscar</Botao>
    </Box>
  )
}
