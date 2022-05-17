import { NavigationContainer } from "@react-navigation/native";
import { TailwindProvider } from "tailwind-rn";
import { AuthProvider } from "./hooks/authContext";

import Navigator from "./navigator";

import utiilities from "./tailwind.json";

export default function App() {
    return (
        <NavigationContainer>
            <TailwindProvider utilities={utiilities}>
                <AuthProvider>
                    <Navigator />
                </AuthProvider>
            </TailwindProvider>
        </NavigationContainer>
    );
}
