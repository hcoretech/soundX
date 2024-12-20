import { Stack } from "expo-router"
import { useEffect } from "react"
import { useSession } from "@/hook/ctx"

export default function AuthLayout(){
 

    return(
        <Stack screenOptions={{headerShown:false}}>
            <Stack.Screen name="account"/>
            <Stack.Screen name="signin"/>
            <Stack.Screen name="signup"/>
            <Stack.Screen name="verify"/>
        </Stack>
    )
}