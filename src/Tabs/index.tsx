import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons'
import Principal from "./Principal";
import Consultas from "./Consultas";
import Perfil from "./Perfil";
import Explorar from "./Explorar";

const Tab = createBottomTabNavigator()

export default function Tabs() {

    const tabs = [
        {
            id: 1,
            name:'Início',
            iconName: 'home',
            component: Principal
        },
        {
            id: 2,
            name:'Consultas',
            iconName: 'calendar',
            component: Consultas
        },
        {
            id: 3,
            name:'Explorar',
            iconName: 'search',
            component: Explorar
        },
        {
            id: 4,
            name:'Perfil',
            iconName: 'person',
            component: Perfil
        }
    ]

    const tabBarOptions = {
        tabBarStyle: {
            backgroundColor:'#002851'
        },
        tabBarActiveTintColor:'#339cff',
        tabBarInactiveTintColor:'#fff'
    }

  return (
    <Tab.Navigator screenOptions={tabBarOptions}>

        {tabs.map(tab => (

            <Tab.Screen 
                key={tab.id}
                name={tab.name} 
                component={tab.component} 
                options={{
                    headerShown: false,
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name={tab.iconName} size={size} color={color}/>
                    )
                }}
            />

        ))}

        

    </Tab.Navigator>
  )
}
