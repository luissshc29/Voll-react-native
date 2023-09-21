import {VStack, Text, ScrollView, Divider} from 'native-base'
import Titulo from '../componentes/Titulo'
import Botao from '../componentes/Botao'
import CardConsulta from '../componentes/CardConsulta'

export default function Consultas() {

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
        },
    ]

  return (
    <ScrollView>
        <VStack flex={1} marginTop={10} alignItems={'center'}>
            <Titulo color={'blue.500'}>Minhas consultas</Titulo>
            <Botao width={'80%'}>Agendar outra consulta</Botao>
            <Titulo color={'blue.500'} alignSelf={'left'} mx={5} fontSize={'md'}>Próximas consultas</Titulo>

            <CardConsulta 
                atendido={false} 
                avatar={consultas[0].avatar} 
                data={consultas[0].data} 
                profissao={consultas[0].profissao}
                nome={consultas[0].nome}
            />

            <Divider marginY={6}/>

            <Titulo color={'blue.500'} alignSelf={'left'} mx={5} fontSize={'md'}>Consultas passadas</Titulo>
            {consultas.map(item => (
                
                <CardConsulta 
                    key={item.id}
                    atendido={item.atendido} 
                    avatar={item.avatar} 
                    data={item.data} 
                    profissao={item.profissao}
                    nome={item.nome}
                />
            ))}

        </VStack>
    </ScrollView>
  )
}
