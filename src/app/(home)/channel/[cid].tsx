import { useLocalSearchParams } from "expo-router"
import { useEffect, useState } from "react"
import { Channel as ChannelType } from "stream-chat"
import { ActivityIndicator, Text, View } from "react-native"
import { Channel, MessageInput, MessageList, useChatContext } from "stream-chat-expo"
import { SafeAreaView } from "react-native-safe-area-context"
import { useAuth } from "@/src/providers/AuthProvider"

export default function ChannelScreen() {
    const [channel,setChannel]=useState<ChannelType| null>(null)
    const {cid} = useLocalSearchParams<{cid : string}>()
    const {client} = useChatContext()

    useEffect(()=>{
        const fetchChannel = async()=>{
            const channels = await client.queryChannels({cid})
            setChannel(channels[0])
        }
        fetchChannel()
    } , [cid])

    if(!channel){
        return <ActivityIndicator/> 
    }
    return(
   <Channel channel={channel} >

   <MessageList /> 
   <SafeAreaView edges={["bottom"]}>
   <MessageInput />
   </SafeAreaView>
  </Channel>

    )

}