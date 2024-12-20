import { createContext, useContext, useReducer, useState } from "react";
import { type PropsWithChildren } from "react";
import { useStorageState } from "./useStorageState";
import { startStorage } from "./authCtx";
import { account } from "@/lib/appwrite";
import { Redirect } from "expo-router";
import { useRouter } from "expo-router";
import Verify from "@/app/(auth)/verify";




const AuthContext = createContext<{
  signIn : ({email,password}:signInProps) => void,
  signUp: ({email,password,fullname}:signUpProps) => void,
  signOut:()=> void,
  session:  string | null,
  isLoading: boolean, 
  verify:(key:string | null)=>void,
  starting:string | null,
  stop:()=>void
}>({

 signIn :({email,password})=>null,
 signUp: () =>  null,
 signOut: () => null,
 session: null,
 isLoading: false,
 verify:()=>null,
starting:null,
stop:()=>null
});
 

export function useSession(){
    const value =  useContext(AuthContext);
     return value ;
   }



 

export function SessionProvider({children}:PropsWithChildren) {
  
    const{signIn,verify,signUp,signOut,stop,} = useSession ();
    const [[isLoading,session],setSession] = useStorageState("session");
    const [[isloading,starting],setStarting] = startStorage("start");
  
    const route = useRouter();

    return(
         <AuthContext.Provider value = {{
            signIn:async({email,password})=>{

              const userLogin = {
                email:email,
                password:password
               }
               const post = await fetch('https://software-city.vercel.app/api/login',{
                  method:"POST",
                  body: JSON.stringify(userLogin),
                  headers :{
                      'Content-type':'application/json'        
                   }
               })
              const response:string = await post.json();
               setSession(response);
              if (post.status === 200){
                return route.replace("/(tabs)/home");
              }
              return;
            
               
            },
            signUp,
            signOut: () => {
              setSession(null);
            },
            session,
            isLoading,     
            verify:async(key)=>{
             
             if (key === null){
              return route.replace("/(auth)/signin")
             }
              const post = await fetch(`https://software-city.vercel.app/api/serverVerify?token=${key}`,{
                method:'GET',
              });
              const response = await post.json();
              console.log(post.status);
              if( post.status=== 400){
                 return route.replace("/(auth)/signin");
              }
              if( post.status === 200){
                return route.replace("/(tabs)/home");
               
              //  return <Redirect href="/signup"/>
              }
              
            }, 
           starting,
           stop:()=>{
            const hash = "kbkvkvkvkvskdjvsdkbwewfbwefu";
            setStarting(hash)
           }
          }}>
           {children}
         </AuthContext.Provider>
    )
}