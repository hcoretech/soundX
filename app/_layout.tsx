import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { Slot } from 'expo-router';
import { SessionProvider } from '@/hook/ctx';



SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  const [loaded,error] = useFonts({

    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    Inter:require('../assets/fonts/Inter-SemiBold.ttf'),
    InterMedium:require('../assets/fonts/InterMedium.ttf')

  });
 

  useEffect(() => {
    if (loaded || error ) {
      SplashScreen.hideAsync();
    }


  }, [loaded]);

  if (!loaded && !error) {
    
    return null;
  }

   
   
  return (
          <SessionProvider>
           <Slot/>
         </SessionProvider>

  );
}
