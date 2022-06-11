import { createContext, useState, useEffect } from "react";
import { View, Text } from "react-native";
import { getToken } from "../utils/token";

const AuthContext = createContext({
    authedUser: {},
    setAuthUser: (user) => null,
    isLoggedIn: () => null,
    setIsLoggedIn: () => null,
});

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async function () {
            let token = await getToken();
            setIsLoggedIn(token != null);
            setIsLoading(false);
        })();
    }, []);

    if (isLoading)
        return (
            <View>
                <Text>Loading</Text>
            </View>
        );

    return (
        <AuthContext.Provider
            value={{
                authedUser: user,
                setAuthUser: setUser,
                isLoggedIn: isLoggedIn,
                setIsLoggedIn: setIsLoggedIn,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
