import { StatusBar } from 'expo-status-bar';
import {
    ActivityIndicator,
    Animated,
    Button, Dimensions,
    Image,
    ImageBackground, Linking, Pressable,
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
    ListItem, ListItemText,
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
                name="Newsfeed"
                component={NewsFeed}
                options={{headerShown: false,}}
            />
        </Stack.Navigator>
    )
}

function HomeScreen() {
    const { user } = useSanctum();
    const navigation = useNavigation();

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
            <YStack gap={20}>
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


                <YStack gap={20}>
                    <XStack justifyContent="space-between">
                        <H5>Last News</H5>

                        <Pressable
                            style={({ pressed }) => ({
                                borderBottomWidth: pressed ? 1 : 0,
                                borderBottomColor: "white",
                            })}
                            onPress={() => navigation.navigate("Newsfeed")}
                        >
                            <H5>View all</H5>
                        </Pressable>
                    </XStack>

                    <YStack>

                    </YStack>
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
function NewsFeed() {
    const { user } = useSanctum();

    const [news, setNews] = React.useState([]);
    const [refreshing, setRefreshing] = React.useState(false);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        axios.get("https://newsapi.org/v2/everything?q=tesla&from=2024-02-27&sortBy=publishedAt&apiKey=dca7da4f981d4c75977617e6995a58f1")
            .then((response) => {
                setNews(response.data.articles);

                setLoading(false);
            });

    }, []);

    const refresh = () => {
        axios.get("https://newsapi.org/v2/everything?q=tesla&from=2024-03-20&sortBy=publishedAt&apiKey=dca7da4f981d4c75977617e6995a58f1")
            .then((response) => {
                setNews(response.data.articles);
            });

        alert("Newsfeed refreshed!")
    }

    return (
        <AppLayout
            headerOptions={{
                title: "Newsfeed",
                buttons: {
                    left: {
                        icon: "arrow-back-outline",
                        navigate: "HomeScreen",
                    },
                    right: {
                        icon: "refresh-outline",
                        onPress: () => refresh(),
                    },
                }
            }}
        >
            {loading && (
                <View style={{ justifyContent: "center", alignItems: "center", padding: 100 }}>
                    <ActivityIndicator size="large" />
                </View>
            )}

            <YStack gap={20}>
                {news.map((article) => {
                    return (
                        <YGroup key={article.url} size="$4" bordered onPress={() => Linking.openURL(article.url)}>
                            <YGroup.Item>
                                <XStack gap={20} padding={10} paddingVertical={20}>
                                    <Image source={{ uri: article.urlToImage }} style={{ width: 64, height: 64, borderRadius: 10 }} />

                                    <YStack>
                                        <H4>{article.author}</H4>
                                        <H6>{article.publishedAt}</H6>
                                    </YStack>
                                </XStack>
                            </YGroup.Item>

                            <YGroup.Item>
                                <Image source={{ uri: article.urlToImage }} style={{ width: "100%", height: 200 }} />
                            </YGroup.Item>
                            <YGroup.Item>
                                <View style={{ padding: 10, gap: 30 }}>
                                    <H3>{article.title}</H3>
                                    <H6>{article.description}</H6>
                                </View>
                            </YGroup.Item>
                        </YGroup>
                    );
                })}
            </YStack>
        </AppLayout>
    );
}
