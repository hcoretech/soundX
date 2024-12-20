import { View,Text } from "react-native";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Search (){
    return(
        <SafeAreaView>
            <View>
              <Text>
                Home screen
              </Text>
            </View>        
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})