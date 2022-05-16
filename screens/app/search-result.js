import {View, Text, SafeAreaView, Image, StyleSheet, ScrollView} from "react-native";

export default function SearchResultScreen() {
    return (
        <ScrollView>
        <SafeAreaView style={styles.mainView}>
            <Text style={styles.mainHeader}>Nearby Restaurants</Text>


            <View style={styles.container}>
                <Image style={styles.containerImage} source={require("../../assets/resturants.png")}/>
                <View style={styles.top}>
                    <Text style={styles.heading}>Choose Kigali</Text>
                    <Text style={styles.p}>World, Africa, Pizzeria, Coffee</Text>
                </View>
            </View>
            <View style={styles.container}>
                <Image style={styles.containerImage} source={require("../../assets/resturants.png")}/>
                <View style={styles.top}>
                    <Text style={styles.heading}>Choose Kigali</Text>
                    <Text style={styles.p}>World, Africa, Pizzeria, Coffee</Text>
                </View>
            </View>
            <View style={styles.container}>
                <Image style={styles.containerImage} source={require("../../assets/resturants.png")}/>
                <View style={styles.top}>
                    <Text style={styles.heading}>Choose Kigali</Text>
                    <Text style={styles.p}>World, Africa, Pizzeria, Coffee</Text>
                </View>
            </View>
            <View style={styles.container}>
                <Image style={styles.containerImage} source={require("../../assets/resturants.png")}/>
                <View style={styles.top}>
                    <Text style={styles.heading}>Choose Kigali</Text>
                    <Text style={styles.p}>World, Africa, Pizzeria, Coffee</Text>
                </View>
            </View>
            <View style={styles.container}>
                <Image style={styles.containerImage} source={require("../../assets/resturants.png")}/>
                <View style={styles.top}>
                    <Text style={styles.heading}>Choose Kigali</Text>
                    <Text style={styles.p}>World, Africa, Pizzeria, Coffee</Text>
                </View>
            </View>
            <View style={styles.container}>
                <Image style={styles.containerImage} source={require("../../assets/resturants.png")}/>
                <View style={styles.top}>
                    <Text style={styles.heading}>Choose Kigali</Text>
                    <Text style={styles.p}>World, Africa, Pizzeria, Coffee</Text>
                </View>
            </View>
        </SafeAreaView>
        </ScrollView>
    );
}

const styles=StyleSheet.create({
    container:{
        display: "flex",
        flexDirection: "row",
        backgroundColor:"rgba(242,242,242,0.4)",
        borderRadius:10,
        width:300,
        height: 80,
        marginLeft:20,
        marginBottom:20
    },
    heading:{
        color:"#000",
        fontSize:20,
        marginLeft:20,
    },
    containerImage:{
        width: 50,
        height:50,
        borderRadius: 15,
        marginLeft:4,
        marginTop:10
    },
    p:{
        color:"#000",
        fontSize: 14,
        marginLeft:20
    },
    mainHeader:{
        marginLeft: 20,
        color:"#F7941D",
        marginBottom:40,
        marginTop:50

    },
    mainView:{
        marginTop: 50,
        paddingBottom: 100,
        backgroundColor:"#ffffff"
    },
    top:{
        marginTop: 10
    }
})
