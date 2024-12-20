import { View,Text } from "react-native";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ImageLogo from "@/components/imageLogo";
import Input from "@/components/input";
import Button from "@/components/button";
import { Link } from "expo-router";
import { useState } from "react";
import { useSession } from "@/hook/ctx";
import { useStorageState } from "@/hook/useStorageState";
import { logo } from "@/components/imageLink";


export default function SignIn(){

  
    const [email,setEmail] = useState<string>("");
    const [password,setPassword] = useState<string>("");
    const [loading,setLoading] = useState<boolean>(false);


    const [[isLoading,session],setSession] = useStorageState('session');
    const {signIn} = useSession();
    
  const Login = async()=>{
      signIn({email,password});
  } 

    


    return(

        <SafeAreaView style={styles.container}>
            <View style={styles.heading}>
               <Text style={styles.headingText}>
                 Login
               </Text>
            </View> 
            <View style={styles.imageStyle}>
                <ImageLogo  imageSource={logo}  />            
            </View>
            
            <View style={{gap:10, marginTop:40}}>
            <View style={{gap:5}}>
                <View>
                    <Text style={{fontSize:16,fontWeight:"bold",color:"#5954A0"}}>
                        Email
                    </Text>
                </View>
                <Input placeholder="Enter your email" value={email} onChangeText={(event)=>setEmail(event)}/>
            </View> 
            <View style={{gap:5}}>
                <View>
                    <Text style={{fontSize:16,fontWeight:"bold", color:"#5954A0"}}>
                        Password
                    </Text>
                </View>
                <Input placeholder="Enter your password" value={password} onChangeText={(event)=>setPassword(event)}/>
            </View>
            </View> 


            <View style={{marginTop:40}}>
               <Button  label="signin" disabled={loading} onPress={Login} />
            </View>

            <View style={{display:"flex", flexDirection:"row" , gap:5,marginTop:50}}>
                <Text style={{fontSize:18, fontFamily:"Inter",color:"#fff"}}>
                    Don't have an Account ?
                </Text>
                <Link href='/signup'>
                <Text style={{fontSize:18,fontFamily:"Inter",color:"#5954A0"}}>
                    signup
                </Text>

                </Link>
            </View>
            <View style={{marginTop:50}}>
                <Link href='/home'>
                  <Text style={{fontSize:18,fontFamily:"Inter", color:"#5954A0"}}>
                     skip for now
                  </Text>
                </Link>
            </View>
                    
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        backgroundColor:"#080714"
    },
    heading:{
        marginTop:30
    },
    headingText:{
        fontSize:24,
        fontFamily:"Inter",
        fontWeight:"bold",
        color:"#fff"


    },
    imageStyle:{
        marginTop:50,
        // backgroundColor:"#fff",
        padding:20,
        borderRadius:70
    },

    inputStyle:{
      
    
    
    }
})