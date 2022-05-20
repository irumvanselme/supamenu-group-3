import axios from "axios";
import react from "react";
import { useReducer, useEffect } from "react";
import {
    View,
    Text,
    SafeAreaView,
    Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import { useState } from "react/cjs/react.production.min";
import Screen from "../../layouts/Screen";

const Restaurant = ({ navigatation, searchQuery }) => {
    const reducer = (state, action) => {
        switch (action.type) {
            case "FETCH_REQUEST":
                return { ...state, loading: true };
            case "FETCH_SUCCESS":
                return { ...state, contents: action.payload, loading: false };
            case "FETCH_FAIL":
                return { ...state, error: action.payload, loading: false };
            default:
                return state;
        }
    };

    const [{ loading, error, contents }, dispatch] = useReducer(reducer, {
        loading: true,
        error: "",
        contents: [],
    });

    useEffect(() => {
        const fetchContent = async () => {
            dispatch({ type: "FETCH_REQUEST" });
            try {
                let result;

                if (searchQuery.length == 0)
                    result = await axios.get(
                        "http://196.223.240.154:8099/supapp/api/service-providers"
                    );
                else
                    result = await axios.get(
                        "http://196.223.240.154:8099/supapp/api/service-providers/search/keyword/" +
                            searchQuery
                    );

                dispatch({
                    type: "FETCH_SUCCESS",
                    payload: result.data.content,
                });
                console.log("Request success");
            } catch (error) {
                dispatch({ type: "FETCH_FAIL", payload: error });
            }
        };
        fetchContent();
    }, [searchQuery]);

    if (loading)
        return (
            <View
                style={{
                    alignItems: "center",
                }}
            >
                <Text
                    style={{
                        fontSize: 30,
                    }}
                >
                    Loading...
                </Text>
            </View>
        );

    return (
        <ScrollView>
            <View>
                {contents.map((c) => (
                    <TouchableOpacity
                        key={c.id}
                        onPress={() => {
                            navigatation.navigate("ShowMenu");
                        }}
                    >
                        <View style={styles.container}>
                            <Image
                                style={styles.containerImage}
                                source={{
                                    uri: "https://picsum.photos/200/300/?blur",
                                }}
                            />
                            <View style={styles.top}>
                                <Text style={styles.heading}>{c.name}</Text>
                                <Text style={styles.p}>
                                    {c.address}, {c.phone},{c.email}
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
};

export default function SearchResultScreen({ navigation, route }) {
    let searchQuery = "";

    if (route.params != undefined) {
        searchQuery = route.params.query;
    }

    console.log(searchQuery.length);

    return (
        <Screen>
            <SafeAreaView style={styles.mainView}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("Search", {
                            value: searchQuery,
                        });
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
                        {searchQuery.length == 0 ? (
                            <Text>Search ...</Text>
                        ) : (
                            <Text>Showing result of : {searchQuery}</Text>
                        )}
                    </View>
                </TouchableOpacity>
                <Text style={styles.mainHeader}>Nearby Restaurants</Text>

                <View>
                    <Restaurant
                        navigatation={navigation}
                        searchQuery={searchQuery}
                    />
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
        opacity: 0.9,
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
        fontSize: 18,
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
