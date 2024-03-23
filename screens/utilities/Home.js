import {View, Text, Button} from "react-native";
import {Headers, ImageTitleSubtitleButtonHeader, TitleHeader} from "../../components/Headers";
import {AppLayout} from "../../layouts/_app";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Camera, useCameraDevice} from "react-native-vision-camera";
import {useCallback, useRef} from "react";
import {CameraRoll} from "@react-native-camera-roll/camera-roll";

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

    const photo = useCallback(async () => {
        /*if (camera.current) {
            const file = await camera.current.takePhoto({quality: '1'})

            const result = await fetch(`file://${file.path}`)

            await CameraRoll.save(`file://${file.path}`, {
                type: 'photo',
            })
        }*/
        CameraRoll.getPhotos({
            first: 20,
            assetType: 'Photos',
        })
            .then(r => {
                console.log(r.edges);
            })
            .catch((err) => {
                //Error Loading Images
            });
    }, [camera])


    return (
        <AppLayout
            header={
                <TitleHeader
                    title={"Utilities"}
                />
            }
        >
            <Camera
                ref={camera}
                style={{flex: 1, width: "100%", height: 500}}
                device={device}
                isActive={true}
                photo={true}
                focusable={true}
                orientation='portrait'
                enableDepthData={true}
                enableZoomGesture={true}
                enablePortraitEffectsMatteDelivery={true}
                enableHighQualityPhotos
            />

            <Button title={"Take photo"} onPress={photo} />

            <Text style={{ color: "white", fontSize: 18}}>UTILITIES</Text>
        </AppLayout>
    )
}
