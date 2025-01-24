import { Channel, ChannelList, MessageInput, MessageList } from "stream-chat-expo"
import { Channel as ChannelType, StreamChat } from "stream-chat"
import React, { useState } from "react"
import { Link, router, Stack } from "expo-router"
import { useAuth } from "@/src/providers/AuthProvider"
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
export default function MainTabScreen(){
  const [channel, setChannel] = useState<ChannelType>()
  const {user} = useAuth()

  if (!user) {
    return null
  }

  return(
    <>
    <Stack.Screen options = {{headerRight:()=>(
      // <Link href={'/(home)/users'} asChild>
      // <FontAwesome5 
      // name="users" 
      // size={25} color="gray" 
      // style = {{marginHorizontal: 15}} 
      // />
      // </Link>
            <Link href={'/(home)/users'} asChild>
             <MaterialCommunityIcons name="bird" 
             size={35} color="gray" 
             style = {{marginHorizontal: 15}}  />
            </Link>

    ),
  }}
    
    />
   <ChannelList 
   filters={{members: {$in : [user.id]}}}
   onSelect={(channel)=>router.push(`/channel/${channel.cid}`)} 
   />
   </>
  )
  }