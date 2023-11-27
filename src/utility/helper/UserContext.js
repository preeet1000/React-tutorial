import { createContext } from "react";

const UserContext = createContext({
    user: {
        userName:'Lovepreet',
        email:'lp@gmail.com'
    }
});

UserContext.displayName = 'UserContext';
export default UserContext;