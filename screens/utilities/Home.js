import {View, Text, Button, Image} from "react-native";
import {Headers, ImageTitleSubtitleButtonHeader, TitleHeader} from "../../components/Headers";
import {AppLayout, TestLayout} from "../../layouts/_app";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Camera, useCameraDevice} from "react-native-vision-camera";
import {useCallback, useRef, useState} from "react";
import {CameraRoll, iosRequestReadWriteGalleryPermission, iosReadGalleryPermission} from "@react-native-camera-roll/camera-roll";
import {useSanctum} from "react-sanctum";
import {useIsFocused} from "@react-navigation/native";
import {useAppState} from '@react-native-community/hooks'


const Stack = createNativeStackNavigator();

export default function UtilitiesHomeScreen()
{
    return (
        <Stack.Navigator initialRouteName="UtilitiesHomeScreen">
            <Stack.Screen name="UtilitiesHomeScreen" component={Home} options={{headerShown: false,}} />
        </Stack.Navigator>
    )
}

function Home()
{

    const camera = useRef(null)
    const device = useCameraDevice('back')

    const [image, setImage] = useState(null);

    const isFocused = useIsFocused()
    const appState = useAppState()
    const isActive = isFocused && appState === "active"

    const testowa = () => {
        iosReadGalleryPermission('addOnly').then((res) => {
            console.log(res)
            if (res === "not-determined") {
                iosRequestReadWriteGalleryPermission().then((res) => {
                    console.log(res)
                }).catch((err) => {
                    console.log(err)
                })
            } else {
                alert("Permission granted");
            }
        }).catch((err) => {
            console.log(err)
        });
    };

    const photo = useCallback(async () => {
        if (camera.current) {
            const file = await camera.current.takePhoto({quality: '1'})

            const result = await fetch(`file://${file.path}`)

            await CameraRoll.save(`file://${file.path}`, {
                type: 'photo',
            })

            console.log(result);

            setImage(result);
        }

    }, [camera])

    if (image) {
        console.log(image.url)
    }

    return (
        <AppLayout
            headerOptions={{
                title: "Utilities",
            }}
        >
            <Camera
                ref={camera}
                style={{flex: 1, width: "100%", height: 500}}
                device={device}
                isActive={isActive}
                photo={true}
                focusable={true}
                orientation='portrait'
                enableDepthData={true}
                enableZoomGesture={true}
                enablePortraitEffectsMatteDelivery={true}
                enableHighQualityPhotos
            />

            <Button title={"Take photo"} onPress={photo} />

            {image && <Image source={{uri: image.url}} style={{width: 200, height: 200}} />}

            <Text style={{ color: "white", fontSize: 18}}>UTILITIES</Text>
        </AppLayout>
    )
}
