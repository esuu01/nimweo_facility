import {Image, Pressable, Text, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";

export const TitleHeader = ({ title }) => {
    return (
        <View style={{ paddingVertical: 10, paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'center', alignItems: "center" }}>
            <Text style={{ color: "white", fontSize: 18}}>
                { title }
            </Text>
        </View>
    );
};

export const ImageTitleSubtitleButtonHeader = ({ image, title, subtitle, button }) => {
    const navigation = useNavigation();

    return (
        <View style={{ paddingVertical: 10, paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row', gap: 15 }}>
                <Image source={{ uri: image }} height={48} width={48} style={{ borderRadius: 10000}} />

                <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
                    <Text style={{ color: "#888888", fontSize: 14}}>{title}</Text>
                    <Text style={{ color: "white", fontSize: 18}}>{subtitle}</Text>
                </View>
            </View>

            <View style={{ width: 48, height: 48 }}>
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
                    <Ionicons name={button.icon} size={24} style={{ color: 'white' }} />
                </Pressable>
            </View>
        </View>
    );
};

export const TitleCloseAddHeader = ({ title, button }) => {
    const navigation = useNavigation();

    return (
        <View style={{ paddingVertical: 10, paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
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
            </View>
        </View>
    );
};

export const TitleBackMoreHeader = ({ title, button }) => {
    const navigation = useNavigation();

    return (
        <View style={{ paddingVertical: 10, paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
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
                    <Ionicons name={"arrow-back"} size={24} style={{ color: 'white' }} />
                </Pressable>
            </View>

            <View style={{ justifyContent: "center"}}>
                <Text style={{ color: "white", fontSize: 18}}>
                    { title }
                </Text>
            </View>

            <View>
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
                    <Ionicons name={"ellipsis-horizontal"} size={24} style={{ color: 'white' }} />
                </Pressable>
            </View>
        </View>
    )
}