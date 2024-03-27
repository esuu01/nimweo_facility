import {TitleHeader} from "../../components/Headers";
import {AppLayout} from "../../layouts/_app";

import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ProductsHomeScreen()
{
    return (
        <AppLayout
            headerOptions={{
                title: "Products",
            }}
        >
            <Text style={{ color: "white", fontSize: 18}}>Products</Text>
        </AppLayout>
    )
}