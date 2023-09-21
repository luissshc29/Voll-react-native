import { NativeBaseProvider, StatusBar } from 'native-base';
import { temas } from './src/estilos/temas';
import Rotas from './src/Rotas';

export default function App() {
  return (
    <NativeBaseProvider theme={temas}>
        <StatusBar backgroundColor={temas.colors.blue[800]}/>
        <Rotas/>
    </NativeBaseProvider>
  );
}
