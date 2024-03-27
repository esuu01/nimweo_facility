import {TitleHeader} from "../../components/Headers";
import {AppLayout} from "../../layouts/_app";

import React, { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {useSanctum} from "react-sanctum";
import ModalLayout from "../../layouts/_modal";

const Stack = createNativeStackNavigator();

export default function ProfileHomeScreen()
{
    return (
        <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false,}} />
        </Stack.Navigator>
    )
}

export function HomeScreen()
{
    const { user } = useSanctum();

    return (
        <AppLayout
            headerOptions={{
                title: "Profile",
            }}
        >
            <Text style={{ color: "white", fontSize: 18}}>Profile</Text>
        </AppLayout>
    )
}