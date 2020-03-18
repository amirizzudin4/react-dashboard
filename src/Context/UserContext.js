import React from "react";

var UserStateContext = React.createContext();

function UserProvider({ children, ...props }) {
    var [userState, setUserState] = React.useState({ isAuntheticated: false, userName: "" });

    return <UserStateContext.Provider value={{ userState, setUserState }}>{children}</UserStateContext.Provider>;
}

function useUserState() {
    var context = React.useContext(UserStateContext);
    if (context === undefined) {
        throw new Error("useUserState must be used within a UserProvider");
    }
    return context;
}

function login_user() {
    let { userState, setUserState } = useUserState();
    return setUserState({ ...userState, isAuntheticated: true });
}

export { UserProvider, useUserState };
