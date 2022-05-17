import { NavigationContainer } from "@react-navigation/native";
import { TailwindProvider } from "tailwind-rn";

import Navigator from "./navigator";

import utiilities from "./tailwind.json";

export default function App() {
    return (
        <NavigationContainer>
            <TailwindProvider utilities={utiilities}>
                <Navigator />
            </TailwindProvider>
        </NavigationContainer>
    );
}
