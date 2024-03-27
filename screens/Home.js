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

import { useSanctum } from 'react-sanctum';

import React from "react";
import axios from "axios";
import {AppLayout} from "../layouts/_app";
import {ImageTitleSubtitleButtonHeader} from "../components/Headers";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import ModalLayout from "../layouts/_modal";
import {useNavigation} from "@react-navigation/native";

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
            headerOptions={{
                title: "Maciej Mierzejewski",
                subtitle: "Good Morning!",
                image: user.profile_photo_url,
                buttons: {
                    right: {
                        icon: "notifications-outline",
                        navigate: "Notifications",
                    },
            }}}
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
