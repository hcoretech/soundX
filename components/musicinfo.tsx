import { View,Text } from "react-native";
import { useEffect,useState } from "react";
import Button from "./button";
import {Audio} from "expo-av"

export default function MusicUri ({uri}:{uri:any}) {
    const [prop,setProp] = useState<any|string[]|null>();
    const [play,setPlay] = useState<boolean>(false);
    const [pause,setPause]= useState<boolean>(false);

    const getProp = async ()=>{
      const sounds = await Audio.Sound;
      console.log(prop)
      const {sound} = await sounds.createAsync(uri[0]);
       await sound.playAsync();  
      
      
    }
    // const getPause = async ()=>{
    //   const sounds = await Audio.Sound;
    //   const {sound} = await sounds.createAsync(uri)
    //   await sound.playAsync();     
    // }



    useEffect(()=>{
      getProp();
    },[uri]);

  return (
    <View>
    <Button label='play' onPress={getProp} disabled={pause} />

    </View>
    
  )

    
}