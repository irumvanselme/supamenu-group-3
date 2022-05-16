import { View,SafeAreaView,  Text,  StyleSheet, FlatList} from "react-native";
import styles from "../../styles";
import { FontAwesome5 } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import MyMenu from "../../components/MyMenu";

export default function ShowMenuScreen() {
    const menuListData = [
        {id: 1, name: "Appetizer"}, 
        {id: 2, name: "Starter"}, 
        {id: 3, name: "Main"}, 
        {id: 4, name: "Dessert"}, 
        {id: 5, name: "Drinks"}
    ];

    return (
        <SafeAreaView style={styles.container}>
          <View>
          <Text style={[styles.text, {marginBottom: 20}]}>Choose Kigali</Text>
          </View>

            <View style={othestyle.options}>
               <View style={othestyle.centeredItem}>
                   <View style={{flexDirection: "row"}}>
                   <MaterialCommunityIcons name="truck-delivery" size={40} color="#f7941d" style={{marginBottom: 15}}/>
                   <Text style={[styles.text, {color: "white", marginTop: 10, marginLeft: 10}]}>N8</Text>
                   </View>
                   <Text style={[styles.text, {color: "white"}]}>Ordered</Text>
               </View>
               <View style={othestyle.verticleLine}></View>
               <View style={othestyle.centeredItem}>
                   <FontAwesome5 name="phone" size={40} color="#f7941d" style={{marginBottom: 15}}/>
                   <Text style={[styles.text, {color: "white", fontWeight: "normal"}]}>Call Waiter</Text>
               </View>
            </View>

            <View style={{marginTop: 30, marginBottom: 30}}>
            <Text style={styles.text}>Menu</Text>
            </View>
           
            <FlatList
            data={menuListData}
            renderItem={({item}) => (
                <MyMenu name={item.name}/>
            )}
           />

        </SafeAreaView>
    );
}

const othestyle = StyleSheet.create({
    options: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    verticleLine:{
        height: 100,
        width: 2,
        backgroundColor: '#f7941d',
        margin: 10,
    },
    centeredItem:{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    }
});