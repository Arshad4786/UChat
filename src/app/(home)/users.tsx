import UserListItem from "@/src/components/UserListItem"
import { supabase } from "@/src/lib/Supabase"
import { useAuth } from "@/src/providers/AuthProvider"
import { useEffect, useState } from "react"
import { FlatList, Text } from "react-native"

export default function UsersScreen() {
const [users, setUsers] = useState([])
const {user} = useAuth()
useEffect(() => {
    const fetchUsers = async () => {
        
let { data: profiles, error } = await supabase
.from('profiles')
.select('*')
.neq('id', user.id)
    setUsers(profiles)
    }
    fetchUsers()
},[])
return (
    <FlatList
     data={users} 
     contentContainerStyle={{gap: 5}}
     renderItem={({item}) => <UserListItem user={item}/>}    
    
    />
)

}