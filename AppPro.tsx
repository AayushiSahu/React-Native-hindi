 import React from 'react'
 import {View,Text,StyleSheet,useColorScheme} from 'react-native'

//return a jsx element
 function AppPro() : JSX.Element{
     const isDarkMode = useColorScheme() === 'dark'

    return(
        <View style = {styles.container}>
            <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
                Hello World
            </Text><Text style={isDarkMode ? styles.whiteText : styles.darkText}>
                Hello World
            </Text>
            <Text>Hello World</Text>
            <Text>Hello World</Text>
            <Text>Hello World</Text>
            <Text>Hello World</Text>
        </View>
    )
 }

 const styles = StyleSheet.create({
     container:{
         flex:3,
         justifyContent: 'center',
         alignItems: 'center',
     },
     darkText:{
         color: "#000000"
     },
     whiteText:{
         color: '#FFFFFF'
     }

 })

 export default AppPro;