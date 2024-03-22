import {SafeAreaProvider} from "react-native-safe-area-context";

import {Sanctum} from 'react-sanctum';
import axios from "axios";

import Navigation from "./utils/navigation";

const sanctumConfig = {
    apiUrl: "https://facility.nimweo.dev",
    csrfCookieRoute: "sanctum/csrf-cookie",
    signInRoute: "login",
    signOutRoute: "logout",
    userObjectRoute: "api/user",
    twoFactorChallengeRoute: "two-factor-challenge",
    usernameKey: "username",
};

axios.defaults.withCredentials = true;

export default function App() {
    return (
        <SafeAreaProvider>
            <Sanctum config={sanctumConfig} checkOnInit={true}>
                <Navigation />
            </Sanctum>
        </SafeAreaProvider>
    );
}