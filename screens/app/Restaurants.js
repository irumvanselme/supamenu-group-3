import React from 'react';
import {SafeAreaView, Text, View, StyleSheet, Image} from "react-native";

function Restaurants() {
    return (
        <SafeAreaView>
            <Text >Hello Restaurants</Text>
            <View style={styles.container}>
                <Text style={styles.heading}>Choose Kigali</Text>
                <Text>World, Africa, Pizzeria, Coffee</Text>
                <Image  style={styles.containerImage} source={require("../../assets/resturants.png")}/>
            </View>
        </SafeAreaView>

    );
}
const styles=StyleSheet.create({
  container:{
      backgroundColor:"dodgerblue",
      borderRadius:10,
      width:"100%",
      margin:"10%"
  },
    heading:{
      color:"#000",
        textAlign:"center",
        alignItems:"center",
        fontSize:30,

    },
    containerImage:{
      width: 100,
        height:200,
        borderRadius: 15,
        marginLeft:2
    },
    p:{
      color:"#000",
        fontSize: 14
    }
})

export default Restaurants;