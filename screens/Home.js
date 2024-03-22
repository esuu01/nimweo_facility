import { StatusBar } from 'expo-status-bar';
import {
    Animated,
    Button,
    Image,
    ImageBackground,
    ScrollView,
    StyleSheet,
    Text,
    useColorScheme,
    View
} from 'react-native';
import {BlurView} from "expo-blur";
import {SafeAreaProvider, SafeAreaView, useSafeAreaInsets} from "react-native-safe-area-context";
import {useEffect, useRef, useState} from "react";

import { useSanctum } from 'react-sanctum';

import React from "react";
import axios from "axios";
import {AppLayout} from "../layouts/_app";
import {ImageTitleSubtitleButtonHeader} from "../components/Headers";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import ModalLayout from "../layouts/_modal";

const Stack = createNativeStackNavigator();

export default function Home()
{
    return (
        <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false,}} />
            <Stack.Screen
                name="Notifications"
                component={Notifications}
                options={{headerShown: false, presentation: "modal",}}
            />
        </Stack.Navigator>
    )
}

function HomeScreen() {
    const { user } = useSanctum();

    return (
        <AppLayout
            header={
                <ImageTitleSubtitleButtonHeader
                    title={"Good morning!"}
                    subtitle={"Maciej Mierzejewski"}
                    image={user.profile_photo_url}
                    button={{
                        icon: "notifications-outline",
                        navigation: "Notifications"
                    }}
                />
            }
        >
            <Text>TEST</Text>
        </AppLayout>
    );
};

function Notifications() {
    const { user } = useSanctum();

    return (
        <ModalLayout title={"Notifications"}>
            <Text>Test</Text>
        </ModalLayout>
    );
}
