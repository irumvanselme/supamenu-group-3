import {
    View,
    Text,
    SafeAreaView,
    Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import Screen from "../../layouts/Screen";

const Restaurant = ({ navigatation }) => {
    return (
        <TouchableOpacity
            onPress={() => {
                navigatation.navigate("ShowMenu");
            }}
        >
            <View style={styles.container}>
                <Image
                    style={styles.containerImage}
                    source={require("../../assets/resturants.png")}
                />
                <View style={styles.top}>
                    <Text style={styles.heading}>Choose Kigali</Text>
                    <Text style={styles.p}>
                        World, Africa, Pizzeria, Coffee
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default function SearchResultScreen({ navigation }) {
    return (
        <Screen>
            <SafeAreaView style={styles.mainView}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("Search");
                    }}
                >
                    <View
                        style={{
                            paddingHorizontal: 40,
                            paddingVertical: 20,
                            borderBottomColor: "#777",
                            borderBottomWidth: 1,
                        }}
                    >
                        <Text>Search ...</Text>
                    </View>
                </TouchableOpacity>
                <Text style={styles.mainHeader}>Nearby Restaurants</Text>

                <View>
                    {[1, 2, 3, 4].map((item) => (
                        <View key={item}>
                            <Restaurant navigatation={navigation} />
                        </View>
                    ))}
                </View>
            </SafeAreaView>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: "rgba(242,242,242,0.4)",
        borderRadius: 10,
        width: 300,
        height: 80,
        marginLeft: 20,
        marginBottom: 20,
    },
    heading: {
        color: "#000",
        fontSize: 20,
        marginLeft: 20,
    },
    containerImage: {
        width: 50,
        height: 50,
        borderRadius: 15,
        marginLeft: 4,
        marginTop: 10,
    },
    p: {
        color: "#000",
        fontSize: 14,
        marginLeft: 20,
    },
    mainHeader: {
        marginLeft: 20,
        color: "#F7941D",
        marginBottom: 40,
        marginTop: 50,
    },
    mainView: {
        paddingBottom: 100,
        backgroundColor: "#ffffff",
        width: "100%",
        height: "100%",
    },
    top: {
        marginTop: 10,
    },
});
