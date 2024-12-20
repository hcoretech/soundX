import { Tabs } from "expo-router";
import AntDesign from '@expo/vector-icons/AntDesign';
import { Platform } from "react-native";
import { View } from "react-native";
import { useEffect } from "react";
import { useSession } from "@/hook/ctx";

export default function TabLayout(){
  
  const {session,verify} = useSession();
    
  const check = async()=>{
   await verify(session);
  }

  useEffect(()=>{
    check();
  },[session]);
  

    return(

        <Tabs screenOptions={{
            // tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
            headerShown: false,
            // tabBarButton: HapticTab,
            // tabBarBackground: (()=> "#000"),
            tabBarStyle: Platform.select({
              ios: {
              
                position: 'absolute',
              },
              default: {},
            }),
          }}>
            <Tabs.Screen name="home" options={{
                tabBarIcon:({color,size,focused})=><AntDesign name="home" size={size} color={color} />
                }}/>
            <Tabs.Screen name="search" options={{}}/>
            <Tabs.Screen name="downloads" options={{}}/>
            <Tabs.Screen name="share" options={{}}/>
            <Tabs.Screen name="settings" options={{}}/>
        </Tabs>

    )
}