import {AppLayout} from "../../layouts/_app";

import React from 'react';
import { Text } from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";

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