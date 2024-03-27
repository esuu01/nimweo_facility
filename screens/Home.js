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
import {
    H1,
    H2,
    H3,
    H4,
    H5, H6,
    ListItem,
    XStack,
    YGroup,
    YStack
} from "tamagui";
import {Ionicons} from "@expo/vector-icons";

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
            <Stack.Screen
                name="Product scanner"
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
            <View style={{ paddingHorizontal: 20}}>
                <YGroup alignSelf="center" bordered size="$4">
                    <YGroup.Item>
                        <ListItem pressTheme hoverTheme icon={<Ionicons name={"star"} /> } title="Star" subTitle="Twinkles" />
                    </YGroup.Item>
                    <YGroup.Item>
                        <ListItem hoverTheme icon={<Ionicons name={"moon"} />}>
                            Moon
                        </ListItem>
                    </YGroup.Item>
                    <YGroup.Item>
                        <ListItem hoverTheme icon={<Ionicons name={"sunny"} />}>
                            Sun
                        </ListItem>
                    </YGroup.Item>
                    <YGroup.Item>
                        <ListItem hoverTheme icon={<Ionicons name={"cloud"} />}>
                            Cloud
                        </ListItem>
                    </YGroup.Item>
                </YGroup>
            </View>

            <YStack gap={20} style={{
                paddingHorizontal: 20
            }}>
                <XStack justifyContent="space-between">
                    <H4>Last News</H4>
                    <H4>View all</H4>
                </XStack>

                <YStack>

                </YStack>
            </YStack>
        </AppLayout>
    );
};

function Notifications() {
    const { user } = useSanctum();

    return (
        <ModalLayout title={"Notifications"}>
            {user.restaurant.inventories.map((inventory) => {
                return (
                    <View key={inventory.id} style={{
                        paddingVertical: 15,
                        paddingHorizontal: 10,
                        borderBottomColor: "white",
                        borderBottomWidth: 1
                    }}>
                        <Text style={{ color: "white", fontSize: 20}}>{inventory.id} - {inventory.mpk} - {inventory.date}</Text>
                    </View>
                );
            })}
        </ModalLayout>
    );
}
