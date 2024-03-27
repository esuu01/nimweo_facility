import {SafeAreaView} from "react-native-safe-area-context";
import {ScrollView, View, Text, Image, Pressable} from "react-native";
import React from "react";
import {Ionicons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";

interface Buttons {
    left?:
        {
            icon: string;
            onPress?: () => void;
            navigate?: string;
        };
    right?:
        {
            icon: string;
            onPress?: () => void;
            navigate?: string;
        };
}

interface HeaderProps {
    title: string;
    subtitle?: string;
    image?: string;
    buttons?: Buttons;
}

// generate test layout props based on type
interface AppLayoutProps {
    children: React.ReactNode;
    headerOptions: HeaderProps;
}

export const AppLayout = ({ children, headerOptions }: AppLayoutProps) => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#101010"}}>
            <View style={{ paddingVertical: 10, paddingHorizontal: 20, flexDirection: 'row', justifyContent: (headerOptions.buttons && headerOptions.image) ? 'space-between' : 'center' }}>
                { (headerOptions.buttons && headerOptions.buttons.left) ? (
                    <View style={{ width: 48, height: 48 }}>
                        <Pressable
                            onPress={() => headerOptions.buttons.left.navigate ? navigation.navigate(headerOptions.buttons.left.navigate) : headerOptions.buttons.left.onPress()}
                            style={({pressed}) => [{
                                backgroundColor: pressed ? "#2F2F2F" : "#222222",
                                borderRadius: 9999999,
                                height: 48,
                                width: 48,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }]}
                        >
                            <Ionicons name={headerOptions.buttons.left.icon} size={24} style={{ color: 'white' }} />
                        </Pressable>
                    </View>
                ) : null}

                <View style={{ flexDirection: 'row', gap: 15 }}>
                    { headerOptions.image && (
                        <Image source={{ uri: headerOptions.image }} height={48} width={48} style={{ borderRadius: 10000}} />
                    )}

                    <View style={{ flexDirection: 'column', justifyContent: headerOptions.subtitle ? 'space-between' : 'center' }}>
                        { headerOptions.subtitle && (
                            <Text style={{ color: "#888888", fontSize: 14}}>{ headerOptions.subtitle }</Text>
                        )}
                        <Text style={{ color: "white", fontSize: 18}}>{ headerOptions.title }</Text>
                    </View>
                </View>

                { (headerOptions.buttons && headerOptions.buttons.right) && (
                    <View style={{ width: 48, height: 48 }}>
                        <Pressable
                            onPress={() => headerOptions.buttons.right.navigate ? navigation.navigate(headerOptions.buttons.right.navigate) : headerOptions.buttons.right.onPress()}
                            style={({pressed}) => [{
                                backgroundColor: pressed ? "#2F2F2F" : "#222222",
                                borderRadius: 9999999,
                                height: 48,
                                width: 48,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }]}
                        >
                            <Ionicons name={headerOptions.buttons.right.icon} size={24} style={{ color: 'white' }} />
                        </Pressable>
                    </View>
                )}
            </View>

            <ScrollView style={{ paddingVertical: 20}}>
                { children }
            </ScrollView>
        </SafeAreaView>
    )
}