import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY
if (!supabaseUrl) {
    throw new Error("EXPO_PUBLIC_SUPABASE_URL is not defined in the environment variables.")
  }

  if (!supabaseAnonKey) {
    throw new Error("EXPO_PUBLIC_SUPABASE_ANON_KEY is not defined in the environment variables.")
  }

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})