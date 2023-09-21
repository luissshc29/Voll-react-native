import {Text, ScrollView, Avatar, Divider, VStack} from 'native-base'
import Titulo from '../componentes/Titulo'

export default function Perfil() {
  return (
    <ScrollView flex={1}>
        <VStack alignItems={'center'} marginY={10} flex={1} p={5}>
            <Titulo color={'blue.500'} fontSize={'3xl'}>Meu perfil</Titulo>
            <Avatar 
                source={{
                    uri: 'https://github.com/luissshc29.png'
                }}
                mt={5}
                size={'lg'}
            />
            <Titulo color={'blue.500'} fontSize={'lg'}>Informações Pessoais</Titulo>
            <Titulo color={'gray.600'} fontSize={'lg'}>Luis Henrique</Titulo>
            <Text color={'gray.300'} fontSize={'md'}>29 Mai. 2003</Text>
            <Text color={'gray.300'} fontSize={'md'}>Fortaleza - CE</Text>

            <Divider marginY={5}/>
            
            <Titulo color={'blue.500'} fontSize={'lg'} mb={4}>Histórico Médico</Titulo>
            <Text color={'gray.600'} fontSize={'lg'}>Sinusite</Text>

        </VStack>
    </ScrollView>
  )
}
