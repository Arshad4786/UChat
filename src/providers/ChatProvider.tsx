import React, { useState } from "react"
import { PropsWithChildren } from "react"
import { useEffect } from "react"
import { ActivityIndicator } from "react-native"
import { StreamChat } from "stream-chat"
import { Chat, OverlayProvider } from "stream-chat-expo"
import { useAuth } from "./AuthProvider"
import { supabase } from "../lib/Supabase"
const apiKey = process.env.EXPO_PUBLIC_STREAM_API_KEY

if (!apiKey) {
  throw new Error("EXPO_PUBLIC_STREAM_API_KEY is not defined in the environment variables.")
}

const client = StreamChat.getInstance(apiKey)


export default function ChatProvider({ children }: PropsWithChildren) {
  const [isReady, setIsReady] = useState(false)
  const {profile} = useAuth()
  useEffect(() => {
    if(!profile){ return}
    const connect = async () => {
      await client.connectUser(
        {
          id: profile.id,
          name: profile.full_name,
          image: supabase.storage.from('avatars').getPublicUrl(profile.avatar_url).data.publicUrl,
        },
        client.devToken(profile.id)
      )
      setIsReady(true)

    }
    connect()
    
    return () => {
      
      client.disconnectUser()
      
      setIsReady(false)
    }
  },[profile?.id])
  if(!isReady){
    return <ActivityIndicator/>
  }

  return (
    <OverlayProvider>
      <Chat client={client}>{children}</Chat>
    </OverlayProvider>
  )
}
