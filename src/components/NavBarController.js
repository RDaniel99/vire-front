import NavBarNotLogged from './NavBarNotLogged';
import NavBarLogged from './NavBarLogged';
import React, { useState } from "react";

export default function NavBarController() {

    const [token, setToken] = useState()

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
