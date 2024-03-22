import Home from "../../screens/Home";
import {MaterialIcons} from "@expo/vector-icons";
import UtilitiesHomeScreen from "../../screens/utilities/Home";
import ProductsHomeScreen from "../../screens/products/Home";
import ChecklistsHomeScreen from "../../screens/checklists/Home";
import {Image, Text} from "react-native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator();

const TestowyWidok = () => {
    return (
        <Text>XDDDD</Text>
    );
}

export default function ChecklistNavigation()
{
    return (
        <Stack.Navigator>
            <Stack.Screen name={"Checklist viewer"} component={TestowyWidok}/>
        </Stack.Navigator>
    )
}