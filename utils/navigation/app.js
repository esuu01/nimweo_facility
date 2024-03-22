import Home from "../../screens/Home";
import {MaterialIcons} from "@expo/vector-icons";
import UtilitiesHomeScreen from "../../screens/utilities/Home";
import ProductsHomeScreen from "../../screens/products/Home";
import ChecklistsHomeScreen from "../../screens/checklists/Home";
import {Image} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {useSanctum} from "react-sanctum";


const Tab = createBottomTabNavigator();

export default function AppNavigation()
{
    const { user } = useSanctum();

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: { position: 'absolute', borderTopColor: "#2F2F2F", backgroundColor: "#101010" },
                tabBarActiveTintColor: "white",
                tabBarInactiveTintColor: "#6F6F6F",
            }}
            initialRouteName={"Home"}
        >
            <Tab.Screen
                name={"Home"}
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (<MaterialIcons name="home" size={size} color={color} />)
                }}
            />
            <Tab.Screen
                name={"Utilities"}
                component={UtilitiesHomeScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (<MaterialIcons name="bolt" size={size} color={color} />)
                }}
            />
            <Tab.Screen
                name={"Products"}
                component={ProductsHomeScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (<MaterialIcons name="shopping-bag" size={size} color={color} />)
                }}
            />
            <Tab.Screen
                name={"Checklists"}
                component={ChecklistsHomeScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (<MaterialIcons name="checklist" size={size} color={color} />)
                }}
            />

            <Tab.Screen
                name={"Profile"}
                component={ChecklistsHomeScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => (<Image source={{ uri: user.profile_photo_url }} width={size} height={size} style={{ borderRadius: 99999, borderColor: color, borderWidth: focused ? 1.5 : 0}}/> )
                }}
            />
        </Tab.Navigator>
    )
}