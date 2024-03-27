import {SafeAreaProvider} from "react-native-safe-area-context";

import * as SplashScreen from 'expo-splash-screen';

import {Sanctum} from 'react-sanctum';
import axios from "axios";

import Navigation from "./utils/navigation";
import {useCallback, useEffect, useState} from "react";
import {Text, useColorScheme} from "react-native";
import {TamaguiProvider} from "tamagui";
import * as Font from 'expo-font';

import tamaguiConfig from "./tamagui.config";

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

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();


export default function App() {
    const [appIsReady, setAppIsReady] = useState(false);

    const colorScheme = useColorScheme();

    const theme = {
        fontFamily: "RedditMono-Regular",
    };

    useEffect(() => {
        async function prepare() {
            try {
                // Load fonts
                await Font.loadAsync({
                    'RedditMono-Black': require('./assets/fonts/RedditMono/RedditMono-Black.ttf'),
                    'RedditMono-Bold': require('./assets/fonts/RedditMono/RedditMono-Bold.ttf'),
                    'RedditMono-ExtraBold': require('./assets/fonts/RedditMono/RedditMono-ExtraBold.ttf'),
                    'RedditMono-Light': require('./assets/fonts/RedditMono/RedditMono-Light.ttf'),
                    'RedditMono-ExtraLight': require('./assets/fonts/RedditMono/RedditMono-ExtraLight.ttf'),
                    'RedditMono-Regular': require('./assets/fonts/RedditMono/RedditMono-Regular.ttf'),
                    'RedditMono-Medium': require('./assets/fonts/RedditMono/RedditMono-Medium.ttf'),
                    'RedditMono-SemiBold': require('./assets/fonts/RedditMono/RedditMono-SemiBold.ttf'),
                });
            } catch (e) {
                console.warn(e);
            } finally {
                // Tell the application to render
                setAppIsReady(true);
            }
        }

        prepare();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
            await SplashScreen.hideAsync();
        }
    }, [appIsReady]);


    if (!appIsReady) {
        return (
            <SafeAreaProvider>
                <Text>LOADING SPLASH SCREEN!!!</Text>
            </SafeAreaProvider>
        )
    }

    return (
        <SafeAreaProvider>
            <TamaguiProvider config={tamaguiConfig} defaultTheme={'dark'}>
                <Sanctum config={sanctumConfig} checkOnInit={true}>
                    <Navigation />
                </Sanctum>
            </TamaguiProvider>
        </SafeAreaProvider>
    );
}