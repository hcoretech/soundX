import { TextInput, type TextInputProps } from "react-native";
import { View } from "react-native";
import { StyleSheet } from "react-native";


export default function Input( {placeholder,value,onChangeText,placeholderTextColor}:TextInputProps){

    return <TextInput   style={styles.inputStyle} numberOfLines={8}     placeholder={placeholder} value={value} onChangeText={onChangeText} aria-label="" placeholderTextColor="#fff" />
}

const styles = StyleSheet.create({

    inputStyle:{
        // borderWidth:2,
        borderColor:"#5954A0",
        borderBottomWidth:2,
        // borderTopWidth:2,
        // borderLeftWidth:2,
        marginBottom:10,
        width:300,
        height:50,
        color:"#fff"
        // borderRadius:8,
        // backgroundColor:"#fff"

 
    }
})