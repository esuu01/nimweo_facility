import {Pressable, ScrollView, Text, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";

export default function ModalLayout({ title, button = null, children })
{
    const navigation = useNavigation();

    return (
        <View style={{
            flex: 1,
            backgroundColor: "#101010"
        }}>
            <View style={{ paddingVertical: 20, paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', gap: 15, width: 48, height: 48 }}>
                    <Pressable
                        onPress={() => navigation.goBack()}
                        style={({pressed}) => [{
                            backgroundColor: pressed ? "#2F2F2F" : "#222222",
                            borderRadius: 9999999,
                            height: 48,
                            width: 48,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }]}
                    >
                        <Ionicons name={"close"} size={24} style={{ color: 'white' }} />
                    </Pressable>
                </View>

                <View style={{ justifyContent: "center"}}>
                    <Text style={{ color: "white", fontSize: 18}}>
                        { title }
                    </Text>
                </View>

                <View style={{ width: 48, height: 48 }}>
                    {button === null ? "" : (
                        <Pressable
                            onPress={() => navigation.navigate(button.navigation)}
                            style={({pressed}) => [{
                                backgroundColor: pressed ? "#2F2F2F" : "#222222",
                                borderRadius: 9999999,
                                height: 48,
                                width: 48,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }]}
                        >
                            <Ionicons name={"add"} size={24} style={{ color: 'white' }} />
                        </Pressable>
                    )}
                </View>
            </View>

            <ScrollView style={{ paddingVertical: 10, paddingHorizontal: 20 }}>
                { children }
            </ScrollView>
        </View>
    );
}