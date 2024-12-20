import { Text, View } from "react-native";
import { StyleSheet } from "react-native";
import { Redirect } from "expo-router";
import { useSession } from "@/hook/ctx";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import ImageLogo from "@/components/imageLogo";
import { Image } from "expo-image";
import { useEffect } from "react";
import { google } from "@/components/imageLink";
import { logo } from "@/components/imageLink";

export default function Account(){
  

    return(
        <SafeAreaView style={styles.container}> 
          <View style={styles.imageStyle}>         
             <ImageLogo imageSource={logo} />
           </View>
           <View style={{gap:16,marginTop:50}}>
           <View>
            <Link href='/signup' style={styles.button}>
              <Text style={styles.buttonText}>
                Create an Account
              </Text>
            </Link>
           </View>
           <View style={styles.buttonGoogle}>
           <Image source={google} style={{height:20,width:20}} contentFit="contain" />
            <Link href='/'>
           
                <Text style={styles.buttonText}>
                Connect with Google
                </Text>
            </Link>
           </View>
           
           </View>

           <View style={{marginTop:30, }}>
            <Text style={{fontSize:16 , fontFamily:"Inter",color:"#fff" }}>
                Already have an Account ?
                <Link href="/(auth)/signin">
                     <Text style={{ color:"#5954A0"}}> Login</Text>
                </Link>
            </Text>
           </View>
           <View style={{ marginTop:80}}>
            <Link href='/(tabs)/home'>
             <Text style={{fontFamily:"Inter", fontSize:18, color:"#5954A0"}}>
                Skip for now
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
        // justifyContent:"center"

    },
    image:{
        
        alignItems:"center",
        display:"flex",
        justifyContent:"center",
        flex:1,
       
        

    },
    button: {
        paddingHorizontal:80 ,
        paddingVertical:15,
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor:"#fff",
        elevation:20,
        shadowColor:"#5954A0",
      
       
        
      //   color:"#fff"
      },
      buttonGoogle: {
        display:"flex",
        flexDirection:"row",
        gap:10, 
        justifyContent:"space-between" ,
        paddingHorizontal:80 ,
        paddingVertical:15,
        shadowColor:"#5954A0",
        elevation:20,
        borderRadius: 5,
        backgroundColor:"#fff",
        // justifyContent:"space-between",
   
        // alignContent:"center"
      //   color:"#fff"
      },
      buttonText:{
           fontFamily:"Inter",
           fontSize:15,
           color:"#5954A0",
           textAlign:"center"
      },
    imageStyle:{
        marginTop:150,
        // elevation:16,
        // shadowColor:"#000",
        backgroundColor:"#fff",
        padding:20,
        borderRadius:70
        
       
    }
})