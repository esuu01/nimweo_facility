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

    const { title, subtitle, image, buttons } = headerOptions;

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#101010"}}>
            <View style={{ paddingVertical: 10, paddingHorizontal: 20, flexDirection: 'row', justifyContent: (buttons) ? 'space-between' : 'center' }}>
                <View style={{ width: 48, height: 48, display: image ? 'none' : 'flex' }}>
                    { (buttons && buttons.left) ? (
                        <Pressable
                            onPress={buttons.left.navigate ? () => navigation.navigate(buttons.left.navigate) : buttons.left.onPress()}
                            style={({pressed}) => [{
                                backgroundColor: pressed ? "#2F2F2F" : "#222222",
                                borderRadius: 9999999,
                                height: 48,
                                width: 48,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }]}>
                            <Ionicons name={buttons.left.icon}
                                      size={24}
                                      style={{color: 'white'}}/>
                        </Pressable>
                    ) : null}
                </View>

                <View style={{ flexDirection: 'row', gap: 15 }}>
                    { image && (
                        <Image source={{ uri: image }} height={48} width={48} style={{ borderRadius: 10000}} />
                    )}

                    <View style={{ flexDirection: 'column', justifyContent: subtitle ? 'space-between' : 'center' }}>
                        { subtitle && (
                            <Text style={{ color: "#888888", fontSize: 14}}>{ subtitle }</Text>
                        )}
                        <Text style={{ color: "white", fontSize: 18}}>{ title }</Text>
                    </View>
                </View>

                <View style={{ width: 48, height: 48 }}>
                    { ( buttons && buttons.right ) && (
                        <Pressable
                            onPress={buttons.right.navigate ? () => navigation.navigate(buttons.right.navigate) : buttons.right.onPress()}
                            style={({pressed}) => [{
                                backgroundColor: pressed ? "#2F2F2F" : "#222222",
                                borderRadius: 9999999,
                                height: 48,
                                width: 48,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }]}
                        >
                            <Ionicons name={buttons.right.icon} size={24} style={{ color: 'white' }} />
                        </Pressable>
                    )}
                </View>
            </View>

            <ScrollView style={{ paddingVertical: 20}}>
                { children }
            </ScrollView>
        </SafeAreaView>
    )
}