import {Link, NavigationContainer} from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import UtilitiesHomeScreen from "../screens/utilities/Home";
import ProductsHomeScreen from "../screens/products/Home";
import ChecklistsHomeScreen from "../screens/checklists/Home";

import {MaterialIcons} from "@expo/vector-icons";

import {useSanctum} from 'react-sanctum';
import {Animated, Easing, Image, Text, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {useEffect, useRef} from "react";
import {BlurView} from "expo-blur";
import AppNavigation from "./navigation/app";
import ChecklistNavigation from "./navigation/checklists";

const Stack = createNativeStackNavigator();

const LoginScreen = () => {
    return (
        <>
            <View>
                <Text>Logowanie</Text>
            </View>
        </>
    );
}

const Notifications = () => {
    return (
        <>
            <View>
                <Text>Notifications</Text>
            </View>
        </>
    );
}

export default function Navigation() {
    const { user, authenticated } = useSanctum();

    const scaleValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(scaleValue, {
                    toValue: 0,
                    duration: 800,
                    useNativeDriver: true,
                }),
                Animated.timing(scaleValue, {
                    toValue: 1,
                    duration: 800,
                    useNativeDriver: true,
                }),
                Animated.timing(scaleValue, {
                    toValue: 0,
                    duration: 800,
                    useNativeDriver: true,
                }),
            ]),
        ).start();
    }, []);

    const interpolated = scaleValue.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 1.50],
    });

    if (authenticated === null) {
        return (
            <SafeAreaView style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Animated.Image
                    style={{
                        transform: [{scale: interpolated}],
                        height: 200,
                        width: 200,
                    }}
                    source={require('../../assets/adaptive-icon.png')}
                />
            </SafeAreaView>
        );
    }

    if (!authenticated) {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={LoginScreen} />
                    <Stack.Screen name="Login" component={LoginScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={"App"} component={AppNavigation} options={{headerShown: false}}/>
                <Stack.Screen name={"Checklists app"} component={ChecklistNavigation} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}