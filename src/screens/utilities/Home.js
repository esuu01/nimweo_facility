import {View, Text} from "react-native";
import {Headers, ImageTitleSubtitleButtonHeader, TitleHeader} from "../../components/Headers";
import {AppLayout} from "../../layouts/_app";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

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
    return (
        <AppLayout
            header={
                <TitleHeader
                    title={"Utilities"}
                />
            }
        >
            <Text style={{ color: "white", fontSize: 18}}>UTILITIES</Text>
        </AppLayout>
    )
}
