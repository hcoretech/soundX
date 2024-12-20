import { Image,type ImageSource } from "expo-image";


import { StyleSheet } from "react-native";

type prop = {
    imageSource:ImageSource
}


export default function  ImageLogo({imageSource}:prop){
    return <Image source={imageSource} style={styles.container} contentFit="contain" />
  }
  
  const styles = StyleSheet.create({
  container:{
    width:90,
    height:90,  
  
  }
  })