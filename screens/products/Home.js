import {AppLayout} from "../../layouts/_app";

import React from 'react';
import { Text } from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import ModalLayout from "../../layouts/_modal";

const Stack = createNativeStackNavigator();

export default function ProductsHomeScreen()
{
    return (
        <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false,}} />
            <Stack.Screen
                name="Product scanner"
                component={Scanner}
                options={{headerShown: false, presentation: "modal",}}
            />
        </Stack.Navigator>
    )
}

export function HomeScreen()
{
    return (
        <AppLayout
            headerOptions={{
                title: 'Products',
                buttons: {
                    right: {
                        icon: 'barcode-outline',
                        navigate: 'Product scanner',
                    }
                }
            }}
        >
            <Text style={{ color: "white", fontSize: 18}}>Products</Text>
        </AppLayout>
    )
}


function Scanner () {

    return (
        <ModalLayout title={"Scanner"}>

        </ModalLayout>
    );
}
