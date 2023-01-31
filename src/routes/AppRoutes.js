import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import RegisterForm from "../pages/RegisterForm";
import LoginForm from "../pages/LoginForm";
import Profile from "../pages/Profile";
import DiscogRecommendation from "../pages/DiscogRecommendation";
import Playlist from "../pages/Playlist";
import Recommendation from "../pages/Recommendation";
import VinylDetails from "../pages/VinylDetails";

function AppRoutes() {
    const [token, setToken] = useState()

    if (!token) {
        return (
            <Routes>
                <Route path="/" exact element={<Recommendation />} />
                <Route exact path="/register" element={<RegisterForm />} />
                <Route exact path="/login" element={<LoginForm />} />
                <Route exact path="/recommendation" element={<Recommendation />} />
                <Route exact path="/vinyl/details/:vinylName/:artist" element={<VinylDetails />} />
            </Routes>
        )
    }
    else {
        <Routes>
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/purchases" element={<DiscogRecommendation />} />
            <Route exact path="/playlist" element={<Playlist />} />
        </Routes>
    }
}
export default AppRoutes;