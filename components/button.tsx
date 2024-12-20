import { Pressable,TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
import { View } from "react-native";


type prop = {
    label:string,
    onPress:()=>void,
    disabled:boolean
}
export default function Button({ label,onPress,disabled}:prop){

    return(

      <View style={styles.container}> 
         <TouchableOpacity disabled={disabled} style={styles.button} onPress={onPress}>
             <Text style={styles.buttonText}>
                {label}
            </Text>
          </TouchableOpacity>
        </View> 
    )
}

const styles = StyleSheet.create({
    container:{
       
        alignItems:"center",
        justifyContent:"center",
       

    },
    button:{
        elevation:25,
        shadowColor:"#5954A0",
        backgroundColor:"#fff",
        paddingHorizontal:110,
        paddingVertical:13,
        borderRadius:10
    },
    buttonText:{
       color:"#5954A0",
       fontFamily:'Inter',
       fontSize:18
    }
})