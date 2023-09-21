import {VStack, Text, ScrollView} from 'native-base'
import ContainerBusca from '../componentes/ContainerBusca'
import Titulo from '../componentes/Titulo'
import CardConsulta from '../componentes/CardConsulta'

export default function Explorar() {

    const consultas = [
        {
            id: 1,
            avatar:'https://github.com/luissshc29.png',
            nome: 'Dr. Luis Henrique',
            profissao: 'Cardiologista',
            data: '20 / 09 / 23',
            atendido: true
        },
        {
            id: 2,
            avatar:'https://github.com/luissshc29.png',
            nome: 'Dr. Luis Henrique',
            profissao: 'Cardiologista',
            data: '20 / 09 / 23',
            atendido: true
        },
        {
            id: 3,
            avatar:'https://github.com/luissshc29.png',
            nome: 'Dr. Luis Henrique',
            profissao: 'Cardiologista',
            data: '20 / 09 / 23',
            atendido: true
        },,
        {
            id: 4,
            avatar:'https://github.com/luissshc29.png',
            nome: 'Dr. Luis Henrique',
            profissao: 'Cardiologista',
            data: '20 / 09 / 23',
            atendido: true
        },
    ]

  return (
    <ScrollView>
        <VStack flex={1} my={'15%'} mx={5} alignItems={'center'}>
            <ContainerBusca/>
            <Titulo color={'blue.500'}>Resultado da busca</Titulo>
            {consultas.map(item => (
                <CardConsulta 
                    key={item.id}
                    avatar={item.avatar} 
                    data={item.data} 
                    profissao={item.profissao}
                    nome={item.nome}
                    atendido={null}
                />
            ))}
        </VStack>
    </ScrollView>
  )
}
