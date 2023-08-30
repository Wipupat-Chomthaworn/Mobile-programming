import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
} from "react-native";

export default function yaimakhome() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={[styles.container]}>
                <View style={styles.menu}>
                    <Image style={styles.logo} source={require("../static/IT_Logo.png")} />
                    <Text style={styles.texttitle}>Programs</Text>
                </View>
                <View style={{ flex: 0.9 }}>
                    <ScrollView>
                        <Image
                            style={styles.imgcontent}
                            source={require("../static/1.jpg")}
                        />
                        <TouchableOpacity style={styles.content}>
                            <Text>Programs</Text>
                        </TouchableOpacity>
                        <Image
                            style={styles.imgcontent}
                            source={require("../static/2.jpg")}
                        />
                        <TouchableOpacity style={styles.content}>
                            <Text>Programs</Text>
                        </TouchableOpacity>
                        <Image
                            style={styles.imgcontent}
                            source={require("../static/3.jpg")}
                        />
                        <TouchableOpacity style={styles.content}>
                            <Text>Programs</Text>
                        </TouchableOpacity>
                        <Image
                            style={styles.imgcontent}
                            source={require("../static/4.jpg")}
                        />
                        <TouchableOpacity style={styles.content}>
                            <Text>Programs</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
    },
    menu: {
        backgroundColor: "lightblue",
        flexDirection: "row",
        alignSelf: "stretch",
        alignItems: "center",
        minHeight: 72,
        flex: 0.1,
    },
    logo: {
        width: "auto",
        height: "auto",
        minHeight: 45,
        minWidth: 54,
        justifyContent: "flex-start",
        marginLeft: 30,
    },
    texttitle: {
        justifyContent: "flex-end",
        fontSize: 30,
        borderRadius: 50,
        marginLeft: 120,
        fontWeight: 500,
    },
    content: {
        fontSize: 18,
        backgroundColor: "lightgray",
        alignSelf: "stretch",
        textAlign: "center",
        minHeight: 27,
    },
    imgcontent: {
        alignSelf: "stretch",
        minHeight: 200,
        minWidth: 400,
    },
});
