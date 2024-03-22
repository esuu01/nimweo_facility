import {SafeAreaView} from "react-native-safe-area-context";
import {ScrollView, View, Text, Image, Pressable, Button} from "react-native";
import {useSanctum} from "react-sanctum";
import React from "react";
import { useNavigation } from '@react-navigation/native';

export const AppLayout = ({ header, children, props}) => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#101010"}}>
            { header }

            <ScrollView style={{ paddingVertical: 20}}>
                { children }

                <Button title={"CHECKLISTS VIEW"} onPress={() => navigation.navigate("Checklists app")}/>
            </ScrollView>
        </SafeAreaView>
    )
}