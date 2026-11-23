import React from 'react';
import {View,Text,StyleSheet,ScrollView} from 'react-native';

export default function ElevatedCards(){
    return(
        <View>
            <Text style= {styles.headingText}>Elevated Cards</Text>
            <ScrollView horizontal={true} style={styles.container}>
                <View style={[styles.card,styles.elevatedOne]}>
                    <Text>Tap</Text>
                </View>
                <View style={[styles.card,styles.elevatedOne]}>
                    <Text>Me</Text>
                </View>
                <View style={[styles.card,styles.elevatedOne]}>
                    <Text>To</Text>
                </View>
                <View style={[styles.card,styles.elevatedOne]}>
                    <Text>Scroll</Text>
                </View>
                <View style={[styles.card,styles.elevatedOne]}>
                    <Text>More...</Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize: 26,
        fontWeight: 'bold',
        paddingHorizontal:8,
    },
    container:{
       padding:6
    },
    card:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        width:100,
        height:100,  
    },
    elevatedOne:{
        backgroundColor: '#2f22e6'

    },
})