
import { Stack } from "expo-router"
import { Redirect } from "expo-router";
import { useSession } from "@/hook/ctx";
import { useEffect } from "react";
import { useRouter } from "expo-router";

export default function RootLayout(){

 const {starting,session} = useSession();
 const route = useRouter();
 
 useEffect(()=>{ 

    if(starting == null && session == null){
        return;
    }
    if(starting !==null && session == null){
        return route.replace("/(auth)/account") ;
    }
    if(starting !== null && session !== null ){
        return route.replace("/(tabs)/home") ;
      }
  
    
  },[starting,session]
 )

    return(
        <Stack  screenOptions={{headerShown:false}}/>
    )
}