import NavBarNotLogged from './NavBarNotLogged';
import React, { useEffect, useState } from "react";
import NavBarLogged from './NavBarLogged';

export default function NavBarController() {

    const [token, setToken] = useState(getToken());

    useEffect(() => {
        setToken(getToken());

    }, []);

    function getToken() {
        const tokenString = sessionStorage.getItem('token')
        const userToken = JSON.parse(tokenString)
        return userToken
    } 

    if (!token)
        return (
            <NavBarNotLogged></NavBarNotLogged>
        )
    else {
        return (
            <NavBarLogged></NavBarLogged>
        )
    }
}
