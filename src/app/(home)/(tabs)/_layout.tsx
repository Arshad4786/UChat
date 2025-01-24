import { Tabs } from "expo-router"
import AntDesign from '@expo/vector-icons/AntDesign'
import Feather from '@expo/vector-icons/Feather'
export default function TabsNavigator(){
    return (
        <Tabs>
            <Tabs.Screen 
            name="index" 
            options={{title:'Chats', tabBarIcon:({size, color})=>(
            <AntDesign name="home" size={size} color="color" />
            ),

            }} 
        />
         <Tabs.Screen 
            name="profile" 
            options={{title:'Profile', tabBarIcon:({size, color})=>(
            <Feather name="user" size={size} color="color" />            
        ),

            }} 
        />
        </Tabs>

    )
}