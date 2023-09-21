import {VStack, Text, ScrollView, Image, Box} from 'native-base'
import Logo from '../assets/Logo.png'
import Titulo from '../componentes/Titulo'
import ContainerBusca from '../componentes/ContainerBusca'

export default function Principal() {

    const depoimentos = [
        {
            id:1,
            texto:'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.',
            autor:'Luis Henrique, 20 anos, Fortaleza/CE.' 
        },
        {
            id:2,
            texto:'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.',
            autor:'Luis Henrique, 20 anos, Fortaleza/CE.' 
        },
        {
            id:3,
            texto:'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores.',
            autor:'Luis Henrique, 20 anos, Fortaleza/CE.' 
        }
    ]

  return (
    <ScrollView>
        <VStack flex={1} my={20} mx={5} alignItems={'left'}>
            <Image source={Logo} alt='Logo'/>
            <Titulo color={'blue.500'} mb={5}>Boas-vindas!</Titulo>
            <ContainerBusca/>

            <Titulo alignItems={'center'} marginTop={10} color={'blue.800'}>Depoimentos</Titulo>
            {depoimentos.map(item => (
                <Box key={item.id} my={7}>
                    <Text color={'gray.500'} fontSize={'md'}>{item.texto}</Text>
                    <Titulo fontSize={'lg'} color={'gray.500'}>{item.autor}</Titulo>
                </Box>
            ))}
        </VStack>
    </ScrollView>
  )
}
