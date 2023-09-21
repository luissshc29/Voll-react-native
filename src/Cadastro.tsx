import { Text, Image, Box, Checkbox, ScrollView } from 'native-base'
import Logo from './assets/Logo.png'
import Titulo from './componentes/Titulo'
import InputComponent from './componentes/InputComponent'
import Botao from './componentes/Botao'
import { useState } from 'react'
import { secoesCadastro as secoes} from './utils/secoes'
 
export default function Cadastro() {

    const [secao, setSecao] = useState(0)

  return (
    <ScrollView 
        flex={1} 
        my={'15%'}
        p={5}
    >
        
        <Image source={Logo} alt='Logo Voll' alignSelf={'center'}/>

        <Titulo
            color='gray.500'
        >
            {secoes[secao].titulo}
        </Titulo>

        <Box
            width={'100%'}
            mt={5}
        >

            {secoes[secao].entradas 

            &&
            
            secoes[secao].entradas.map(item => (
                <InputComponent label={item.label} placeholder={item.placeholder} key={item.id} type={item.type ? 'password' : 'text'}/>
            ))}

            { secoes[secao].checkbox 

            &&

            <Text color={'blue.600'} fontWeight={'bold'} mb={2} fontSize={'md'}>Selecione o(s) plano(s):</Text>
            }

            { secoes[secao].checkbox 

            &&

            secoes[secao].checkbox.map(item => (
                <Checkbox marginY={1} key={item.id} value={item.nome}>{item.nome}</Checkbox>
            ))}

        </Box>

        {secao > 0 && 
            <Botao 
                onPress={() => setSecao(secao-1)}
                bgColor={'gray.400'}
            > 
                Voltar 
            </Botao>
        }

        <Botao 
            onPress={() => {
                if (secao < secoes.length - 1) {                   
                    setSecao(secao+1)
                }
            }}
        > 
            Avançar 
        </Botao>

    </ScrollView>
  )
}
