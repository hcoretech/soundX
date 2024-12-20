// import { Image,type ImageSource } from "expo-image";
import { StyleSheet } from "react-native";
import { Image,type ImageSource } from "expo-image";

type prop = {
    imageSource:ImageSource
}

export  default function  ImageViewer({imageSource}:prop){
    return <Image source={imageSource} style={styles.container} contentFit="contain" />
}

const styles = StyleSheet.create({
  container:{
    width:350,
    height:350,  

  }
})
