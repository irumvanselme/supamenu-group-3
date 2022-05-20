import axios from "axios";
import { useReducer, useEffect } from "react"
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

    const reducer = (state, action) => {
        switch (action.type) {
            case "FETCH_REQUEST":
                return { ...state, loading: true }
            case "FETCH_SUCCESS":
                return { ...state, contents: action.payload, loading: false }
            case "FETCH_FAIL":
                return { ...state, error: action.payload, loading: false }
            default:
                return state;
        }
    }

    const [{ loading, error, contents }, dispatch] = useReducer(reducer, {
        loading: true,
        error: "",
        contents: []
    })

    useEffect(() => {
        const fetchContent = async () => {
            dispatch({ type: "FETCH_REQUEST" })
            try {
                const result = await axios.get("http://196.223.240.154:8099/supapp/api/service-providers")
                dispatch({ type: "FETCH_SUCCESS", payload: result.data.content })
                console.log("Request success")
            } catch (error) {
                dispatch({ type: "FETCH_FAIL", payload: error })
            }
        }
        fetchContent()
    }, [])
    return (
        <ScrollView>


            <View>
                {contents.map((c) => (
                    <TouchableOpacity key={c.id}
                        onPress={() => {
                            navigatation.navigate("ShowMenu")
                        }}>
                        <View style={styles.container}>
                            <Image
                                style={styles.containerImage}
                                source={{uri:"https://picsum.photos/200/300/?blur"}} />
                            <View style={styles.top}>
                                <Text style={styles.heading}>{c.name}</Text>
                                <Text style={styles.p}>{c.address}, {c.phone},{c.email}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
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
                    <Restaurant navigatation={navigation} />

                </View>
            </SafeAreaView>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#d2d2cf",
        borderRadius: 10,
        width: 370,
        height: 80,
        marginLeft: 20,
        marginBottom: 20,
        opacity:0.9
    },
    heading: {
        color: "#000",
        fontSize: 20,
        marginLeft: 20,
    },
    containerImage: {
        width: 70,
        height: 68,
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
        fontSize:18
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
