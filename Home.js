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

const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);

export default function Home() {
    const { signIn, user } = useSanctum();


    const [username, setUsername] = useState("maciej.mierzejewski1");
    const [password, setPassword] =  useState("Mierzej12!");
    const [rememberMe, setRememberMe] =  useState(false);

    const [code, setCode] = useState("");
    const [recoveryCode, setRecoveryCode] = useState("");

    const [showTwoFactor, setShowTwoFactor] =  useState(false);

    const [loaded, setLoaded] =  useState(true);

    const text = 'Hello, my container is blurring contents underneath!';
    const insets = useSafeAreaInsets();

    const [barStyle, setBarStyle] = React.useState("light");

    const offset = useRef(new Animated.Value(0)).current;

    const colorScheme = useColorScheme();

    const translation = offset.interpolate({
        inputRange: [0, 200],
        outputRange: [0, 80]
    });

    const login = () => {
        console.log(user);
        let url = "https://facility.nimweo.dev/";

        signIn(username, password, rememberMe)
            .then(({twoFactor}) => {
                if (twoFactor) setShowTwoFactor(true);

                setLoaded(true);
            })
            .catch((e) => {
                console.log(e);
                window.alert("Incorrect email or password")
                setLoaded(true);
            });
    }

    offset.addListener((event) => {
        if (colorScheme === "dark" || event.value <= 300) {
            setBarStyle("light");
        } else {
            setBarStyle("dark");
        }
    })

    return (
        <SafeAreaView edges={[ "left", "right", "bottom" ]} style={{ flex: 1 }}>
            <AnimatedBlurView
                style={{
                    position: "absolute",
                    width: "100%",
                    zIndex: 1000,
                    paddingTop: insets.top
                }}
                tint={colorScheme}
                intensity={translation}
            >
                <Text style={styles.text}>{text}</Text>
            </AnimatedBlurView>

            <Animated.ScrollView
                bounces={false}
                alwaysBounceVertical={false}
                contentContainerStyle={{ flexGrow: 1 }}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: offset } } }],
                    { useNativeDriver: false }
                )}
                scrollEventThrottle={16}
            >
                <ImageBackground
                    source= { require('./assets/hero.png') }
                    style={{width: '100%', height: 400, flex: 1, alignItems: "center", justifyContent: "center"}}
                    resizeMode="cover"
                    blurRadius={10}
                >
                </ImageBackground>

                <View style={{ height: 10000}}>
                    <Text>{text}</Text>
                    <Text>{text}</Text>
                    <Text>{text}</Text>
                    <Text>{text}</Text>
                    <Button title={"LOGIN"} onPress={login} />
                    <Text>{text}</Text>
                    <Text>{text}</Text>
                    <Text>{text}</Text>
                    <Text>{text}</Text>
                    <Text>{text}</Text>
                    <Text>{text}</Text>
                    <Text>{text}</Text>
                    <Text>{text}</Text>
                    <Text>{text}</Text>
                    <Text>{text}</Text>
                    <Text>{text}</Text>
                    <Text>{text}</Text>
                    <Text>{text}</Text>
                </View>
            </Animated.ScrollView>

            <StatusBar style={barStyle} animated={true} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
    },
});
