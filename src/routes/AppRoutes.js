import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import RegisterForm from "../pages/RegisterForm";
import LoginForm from "../pages/LoginForm";
import Profile from "../pages/Profile";
import DiscogRecommendation from "../pages/DiscogRecommendation";
import Playlist from "../pages/Playlist";
import Recommendation from "../pages/Recommendation";
import VinylDetails from "../pages/VinylDetails";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" exact element={<LandingPage />} />
            <Route exact path="/register" element={<RegisterForm/>}/>
            <Route exact path="/login" element={<LoginForm/>}/>
            <Route exact path="/profile" element={<Profile/>}/>
            <Route exact path="/purchases" element={<DiscogRecommendation/>}/>
            <Route exact path="/playlist" element={<Playlist/>}/>
            <Route exact path="/recommendation" element={<Recommendation/>}/>
            <Route exact path="/vinyl/details/:vinylName/:artist" element={<VinylDetails/>}/>
        </Routes>
    )
}
export default AppRoutes;