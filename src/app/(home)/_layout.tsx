import { useAuth } from "@/src/providers/AuthProvider"
import ChatProvider from "@/src/providers/ChatProvider"
import { Redirect, Stack } from "expo-router"
import { StreamChat } from "stream-chat"


export default function HomeLayout() {
  const {user} = useAuth()
     if(!user) {
         return <Redirect href="/(auth)/login"/>
     }
  return (
    <ChatProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </ChatProvider>
  )
}
