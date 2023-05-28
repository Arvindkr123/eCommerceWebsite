import React, { createContext } from 'react'
import { useState } from 'react';

export const UserMailContext = createContext();


const UserMailProvider = (props) => {
    const [userEmail, setUserEmail] = useState('');
    console.log(userEmail)

    const login = (email) => {
        setUserEmail(email);
    }

    const logOutMail = () => {
        setUserEmail('');
    }
    return (
        <UserMailContext.Provider value={{ userEmail, login, logOutMail }}>
            {props.children}
        </UserMailContext.Provider>
    )
}

export default UserMailProvider;
