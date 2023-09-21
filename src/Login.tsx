import { VStack, Image, Text, Box, FormControl, Input, Button, Link, } from 'native-base'
import { TouchableOpacity } from 'react-native'
import Logo from './assets/Logo.png'
import Titulo from './componentes/Titulo'
import InputComponent from './componentes/InputComponent'
import Botao from './componentes/Botao'
 
export default function Login({navigation}) {
  return (
    <VStack 
        flex={1} 
        alignItems='center'
        justifyContent='center' 
        p={5}
    >
        
        <Image source={Logo} alt='Logo Voll'/>

        <Titulo
            color='gray.500'
        >
            Faça login em sua conta
        </Titulo>

        <Box>

            <InputComponent placeholder='Digite seu e-mail ...' type='text' label='E-mail'/>

            <InputComponent placeholder='Digite sua senha ...' type='password' label='Senha'/>

        </Box>

        <Botao onPress={() => navigation.navigate('Tabs')}>Entrar</Botao>

        <Link
            href='https://linkedin.com/in/luis-henrique-6a7425165/'
            mt={4}
            color={'blue.800'} 
        >
            Esqueceu sua senha?
        </Link>

        <Box
            display='flex'
            flexDirection={'row'}
            mt={8}
            w={"100%"}
            justifyContent={'center'}
        >
            <Text>Ainda não tem conta?</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('Cadastro')}
            >
                <Text
                    color={'blue.500'}
                    ml={1}
                >                    
                    Faça seu cadastro!
                </Text>
            </TouchableOpacity>
        </Box>

    </VStack>
  )
}
