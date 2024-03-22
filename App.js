import { StatusBar } from 'expo-status-bar';
import {Image, ImageBackground, StyleSheet, Text, useColorScheme, View} from 'react-native';
import {BlurView} from "expo-blur";
import {SafeAreaProvider, SafeAreaView, useSafeAreaInsets} from "react-native-safe-area-context";
import Home from "./Home";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Sanctum } from 'react-sanctum';
import axios from "axios";
import {NavigationContainer} from "@react-navigation/native";

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

const Tab = createBottomTabNavigator();

export default function App() {

    const colorScheme = useColorScheme();

    const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
    const themeContainerStyle =
        colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;

    return (
        <SafeAreaProvider style={[themeContainerStyle]}>
            <Sanctum config={sanctumConfig} checkOnInit={true}>
                <NavigationContainer>
                    <Tab.Navigator>
                        <Tab.Screen name={"Home"} component={Home} />
                    </Tab.Navigator>
                </NavigationContainer>
            </Sanctum>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
    },
    lightContainer: {
        backgroundColor: '#fff',
    },
    darkContainer: {
        backgroundColor: '#000',
    },
    lightThemeText: {
        color: '#242c40',
    },
    darkThemeText: {
        color: '#d0d0c0',
    },
});