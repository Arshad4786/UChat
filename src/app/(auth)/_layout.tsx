import { useAuth } from "@/src/providers/AuthProvider"
import { Redirect, Stack } from "expo-router"

export default function AuthLAyout() {
   const {user} = useAuth()
   if(user) {
       return <Redirect href="/(home)/(tabs)"/>
   }
   
    return <Stack/>
            
  
}