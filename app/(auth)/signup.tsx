import { View,Text } from "react-native";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "@/components/input";
import Button from "@/components/button";
import { Link, router } from "expo-router";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useState } from "react";
import { useRouter } from "expo-router";
import { ActivityIndicator } from "react-native";

export default function SignUp(){
     
 
     const router = useRouter();
     const [name, setname] = useState<string> ("");
     const [email, setEmail] = useState <string> ("");
     const [password, setPassword] = useState<string> ("");
     const [error,setError] = useState<string |null>(null);
     const [loading,setLoading] = useState<boolean>(false);
  
     const  HandleSignUp = async() =>{
        setError(null);
        setLoading(true)
        try {
            const userLogin = {
                name:name,
                email:email,
                password:password
               }
            const post = await fetch('https://software-city.vercel.app/api/signup',{
                method:"POST",
                body: JSON.stringify(userLogin),
                headers :{
                    'Content-type':'application/json'        
                 }
            })
            const response = await post.json();
            console.log(response);
            if(post.status === 200){
                router.replace("/(auth)/signin");
            }
            else{
                throw response
            }

        } catch (err:any) {
          return setError(err)
        }
        finally{
            setLoading(false);
        }
        
        // await login(email, password);
        // console.log(create);
        // setLoggedInUser(await account.get());
    }

   

    return(

        <SafeAreaView style={styles.container}>
            <View style={styles.heading}>
               <Text style={styles.headingText}>
                 Create an Account
               </Text>
            </View> 
            <View style={styles.imageStyle}>
            <MaterialIcons name="add-a-photo" size={50} color="black" />          
            </View>
            
            <View style={{gap:10, marginTop:40}}>
            <View style={{gap:5}}>
                <View>
                    <Text style={{fontSize:16,fontWeight:"bold",color:"#5954A0"}}>
                        Full name
                    </Text>
                </View>
                <Input placeholder="Enter your Full name" value={name} onChangeText={(val)=>{setname(val)}}/>
            </View> 
            <View style={{gap:5}}>
                <View>
                    <Text style={{fontSize:16,fontWeight:"bold",color:"#5954A0"}}>
                        Email
                    </Text>
                </View>
                <Input placeholder="Enter your email" value={email} onChangeText={(val)=>{setEmail(val)}}/>
            </View> 
            <View style={{gap:5}}>
                <View>
                    <Text style={{fontSize:16,fontWeight:"bold", color:"#5954A0"}}>
                        Password
                    </Text>
                </View>
                <Input placeholder="Enter your password" value={password} onChangeText={(val)=>{setPassword(val)}} />
            </View>
            </View> 


            <View style={{marginTop:40}}>
                {/* {  
                loading ?( <View style={{ backgroundColor:"gray", paddingHorizontal:80,paddingVertical:8,borderRadius:10,display:"flex", flexDirection:"row", alignItems:"center"}}>
                              <ActivityIndicator  size="large" color="#080714"/> 
                             <Text style={{color:"#080714",fontSize:18}}> please wait</Text> 
                           </View>):(    */}
               <Button label="signup" disabled={loading} onPress={HandleSignUp} />
                {/* // ) */}
                {/* } */}
            </View>
            <View>
                {error &&(
                    <Text style={{color:"red",fontSize:16}}> {error}</Text>
                )}
            </View>

            <View style={{display:"flex", flexDirection:"row" , gap:5,marginTop:50}}>
                <Text style={{fontSize:18, fontFamily:"Inter",color:"#fff"}}>
                    Already have an Account ?
                </Text>
                <Link href='/signin'>
                <Text style={{fontSize:18,fontFamily:"Inter",color:"#5954A0"}}>
                    signin
                </Text>

                </Link>
            </View>
            <View style={{marginTop:30}}>
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
        // backgroundColor:"#010101"
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
        marginTop:40,
        backgroundColor:"#fff",
        padding:20,
        borderRadius:70
    },

    inputStyle:{
      
    
    
    }
})