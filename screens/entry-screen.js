import { Text, View } from "react-native";
import { useTailwind } from "tailwind-rn/dist";

export default function EntryScreen(){
    const tailwind = useTailwind();

    return (
        <View style={tailwind("bg-red-500 w-[100px]")}>
            <Text>Hello</Text>
        </View>
    )
}