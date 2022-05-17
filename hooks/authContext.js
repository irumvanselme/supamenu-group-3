import { createContext, useState } from "react";

const AuthContext = createContext({
    authedUser: {},
    setAuthUser: (user) => null,
    isLoggedIn: () => null,
    setIsLoggedIn: () => null,
});

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);

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
