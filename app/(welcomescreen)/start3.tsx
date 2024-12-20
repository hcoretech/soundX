import { Text, View } from "react-native";
import { StyleSheet } from "react-native";
import { useSession } from "@/hook/ctx";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import ImageViewer from "@/components/imageViewer";
import { Link } from "expo-router";
import { NextColor } from "@/components/nextColor";
import { usePathname } from "expo-router";
import { world } from "@/components/imageLink";

export default function Start(){

  
    const pathname = usePathname();

    const {stop} =useSession();
    return(
        <SafeAreaView style={styles.container}>
            
          <LinearGradient style={styles.gradient} colors={["#080714","#0D0945","#ffffff"]} start={[0.5,0.2]} locations={[0.1,0.35,0.35]}>
             <View style={{alignItems:"flex-end" }}>
                <Link href='/(auth)/account' onPress={stop} style={{ color:"#fff" , fontSize:20, padding:10}}>
                  <Text >
                      Skip
                  </Text>
                </Link>
             </View>
             <View style={styles.imageStyle} >
               <ImageViewer imageSource={world}/>
             </View>

             <View style={{  gap:20, margin:5,alignItems:"center"}}>
                <Text style={{
                         fontSize: 24,
                         textAlign:'center',  
                         fontFamily:"Inter",
                        //  fontWeight:"semibold"s
                }}>
                   Never Miss Your Favorites Songs
                </Text >
              
             </View>
             <View style={{ paddingHorizontal:80, marginTop:5}}>
             <Text style={{
                         fontSize: 16,
                         textAlign:'center',  
                         fontFamily:"InterMedium",
                         
                        //  fontWeight:"semibold"s
                }}>
                  Get the latest streams songs all
                  over the world for free
                 </Text>
             </View>

             <View style={{display:'flex',flexDirection:"column",marginTop:110, gap:10,alignItems:"center"}}>
               <View style={{display:'flex',flexDirection:"row", gap:5,alignItems:"center"}}>
                  
                      {
                        NextColor.map((value) => {
                            const active = pathname === value.route;
                            const color = active ? "#5954A0" : "#534C4C";

                            return(
                                   <View key={value.id}  style={{backgroundColor:`${color}` ,borderRadius:100,padding:3}}></View>
                              
                            )

                        })
                      }
                          
                  </View>
                  <Link href="/(auth)/account" onPress={stop}  style={styles.button}>
                      <Text  style={styles.buttonText}>
                        Sign In or Create an account
                       </Text>      
                   </Link> 
            
            </View>   
           </LinearGradient>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        // alignItems:"center",

    },
    gradient:{
        
        // alignItems:"center",
        justifyContent:"center",
        flex:1

    },
    button: {
        paddingHorizontal:70 ,
        paddingVertical:15,
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor:"#080714",
      //   color:"#fff"
      },
      buttonText:{
           fontFamily:"Inter",
           fontSize:18,
           color:"#fff"
      },
    imageStyle:{
        marginTop:70,
        alignItems:"center"
       
    }
})