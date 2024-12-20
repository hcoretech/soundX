import { Color } from "@/constants/color";
import { createContext } from "react";
import { useContext } from "react";
import { useTheme } from "@react-navigation/native";



const theme =  createContext(Color);

export function useThemes(){
    const themes = useContext(theme);
    return themes;
}
// export function ThemeProvider(){
//     return(
//         <theme.Provider value={}>

//         </theme.Provider>
//     )
// }
