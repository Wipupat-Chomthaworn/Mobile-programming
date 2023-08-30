import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
const picture = [
    { url: require('../1.jpg'), name: "Artificial Intellegent Techonology" },
    { url: require('../2.jpg'), name: "Bussiness Information Techonology", name2: "(International Programs)" },
    { url: require('../3.jpg'), name: "Data Science and Bussiness Analytics" },
    { url: require('../4.jpg'), name: "Information Techonology" },
];

const Lab3_2 = () => {
    return (
        <SafeAreaView style={styles2.container}>
            <View style={styles2.header}>
                <Image
                    style={styles2.logo}
                    source={require('../IT_Logo.png')}
                />
                <Text style={{ fontSize: 40, color: 'blue', fontWeight: 'bold' }}>Programs</Text>
            </View>
            <FlatList
                data={picture}
                renderItem={({ item, index }) => <View key={index}>
                    <TouchableOpacity>
                        <Image source={item.url} />
                        <View style={styles2.button}>
                            <Text style={styles2.hel}>{item.name}</Text>
                            {item.name2 ? <Text style={styles2.hel}>{item.name2}</Text> : ""}
                        </View>

                    </TouchableOpacity>
                </View>}
            />
            <StatusBar style="auto" />
        </SafeAreaView>
    );
};


const styles2 = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 25,
        backgroundColor: '#AAD9E6'
    },
    logo: {
        width: 60,
        height: 50,
    },
    scrollViewContent: {
        flexGrow: 1,
        alignItems: 'center',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        backgroundColor: '#DDDDDD',
    },
    hel: {
        fontWeight: 'bold',
        fontSize: 15,
    }
});

export { Lab3_2 }