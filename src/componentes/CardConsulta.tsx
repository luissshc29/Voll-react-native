import {VStack, Avatar, Text} from 'native-base'
import Titulo from './Titulo'
import Botao from './Botao'

interface ICardProps {
    avatar: string
    nome: string
    profissao:string
    data:string
    atendido: boolean | null
}

export default function CardConsulta({nome, avatar, profissao, data, atendido}: ICardProps) {
  return (
    <VStack 
        display={'flex'} 
        alignItems={'center'}
        my={5} 
        shadow={5} 
        borderRadius={'xl'} 
        bgColor={atendido === false || atendido === null ? 'gray.100' : 'blue.100'}
        p={5} 
        width={'90%'} 
        flexDir={'row'} 
        flexWrap={'wrap'}
    >
            <Avatar source={{uri: avatar}} size={'lg'}/>
            <VStack>
                <Titulo color={'gray.600'} alignSelf={'left'} mx={5} fontSize={'md'}>{nome}</Titulo>
                <Text color={'gray.500'} alignSelf={'left'} mx={5} fontSize={'sm'}>{profissao}</Text>
                <Text color={'gray.500'} alignSelf={'left'} mx={5} fontSize={'sm'}>{data}</Text>
            </VStack>
            <Botao>{atendido || atendido === null ? 'Agendar consulta' : 'Cancelar'}</Botao>
    </VStack>
  )
}
