import { Text, TouchableOpacity, View } from "react-native";
import { Entypo } from "@expo/vector-icons";

export default function MyMenu({ item, name }) {
    return (
        <TouchableOpacity
            onPress={() => {
                console.log(item);
            }}
        >
            <View
                style={{
                    flex: 1,
                    flexDirection: "row",
                    width: "100%",
                    justifyContent: "space-around",
                    paddingTop: 10,
                    paddingBottom: 10,
                }}
            >
                <Text style={{ color: "white", width: "40%" }}>{name}</Text>
                <Entypo name="chevron-small-right" size={24} color="white" />
            </View>
        </TouchableOpacity>
    );
}
