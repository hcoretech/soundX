import { View,Text,ScrollView } from "react-native";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "@/components/button";
import { useSession } from "@/hook/ctx";
import { useState,useEffect } from "react";
import * as MediaLibrary from 'expo-media-library';
import  MusicUri  from "@/components/musicinfo";
import ImageLogo from "@/components/imageLogo";



export default function HomeScreen (){

    const {signOut,isLoading} = useSession()
    const [albums, setAlbums] = useState<any |null|string[]>(null);
    const [prop,setProp] =useState(null)
    const [permissionResponse,requestPermission] = MediaLibrary.usePermissions();
    


  async function getAlbums() {
    if (permissionResponse?.status !== 'granted') {
      await requestPermission();
    }

      const fetch= await MediaLibrary.getAssetsAsync({
        mediaType:['audio'],
        sortBy:"creationTime", 
        first:20,             
      });
    
      const info = await MediaLibrary.getAssetInfoAsync(fetch.assets[7].id);
      setAlbums(fetch.assets);
      console.log(info)
     
      setProp(prop)

      console.log(prop);

    
  }
  // async function LoadMusic(){
  //       await TrackPlayer.setupPlayer();
  //       await TrackPlayer.getTrack
  //       await TrackPlayer.add("file:///storage/emulated/0/Download/06. Lil Brother - (SongsLover.com).mp3")

  // }
   
    return(
        <SafeAreaView style={styles.container}>
            <View>
              <Text>
                Home screen
              </Text>
              <Button label="Logout" disabled={isLoading} onPress={signOut}/>
            </View>  
      
           <Button onPress={getAlbums} label="get albulm" disabled={isLoading} />
          <ScrollView>
            {albums &&(
                albums.map((album:any)=>{
                    return <View key={album.id}>
                              < ImageLogo imageSource={album.uri}  />
                              <MusicUri uri={album}/>
                             <Text style={{color:'white'}}>{album.uri}</Text> 
                           </View>
                })
            )}
         </ScrollView>
          
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#080714"

    }
})

// function AlbumEntry({ album }) {
//     const [assets, setAssets] = useState([]);
  
//     useEffect(() => {
//       async function getAlbumAssets() {
//         const albumAssets = await MediaLibrary.getAssetsAsync({ album,mediaType:"audio" });
//         setAssets(albumAssets.assets);
//       }
//       getAlbumAssets();
//     }, [album]);
  
//     return (
//       <View key={album.id} style={styles.albumContainer}>
//         <Text>
//           {album.title} - {album.assetCount ?? 'no'} assets
//         </Text>
//         <View style={styles.albumAssetsContainer}>
//           {assets && assets.map((asset) => (
//             // <Image source={{ uri: asset.uri }} width={50} height={50} />
//           ))}
//         </View>
//       </View>
//     );
//   }