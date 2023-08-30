import { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput, ScrollView, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

const Lab3_1 = ({ navigation }) => {
    const [text, setText] = useState(""); // input
    const [text2, setText2] = useState([]); // output
    return (
        <SafeAreaView style={styles.container}>
            <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 12 }}>สมุดบันทึก</Text>
            <View style={{ width: '90%' }}>
                <TextInput
                    placeholder="เพิ่มข้อความที่นี่"
                    style={{ borderWidth: 1, marginBottom: 12, height: 50, padding: 10 }}
                    value={text}
                    onChangeText={(input) => { setText(input); }}
                />
                <Button title='บันทึก' onPress={text ? () => { setText2([...text2, text]); setText(""); } : undefined}></Button>
            </View>
            <FlatList
                data={text2}
                renderItem={({ item }) => <Text style={{ fontSize: 70, textAlign: 'center' }}>{item}</Text>}
                keyExtractor={(item, index) => index} 
                style={{ width: '100%' }} 
            />
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    }
});

export { Lab3_1 }
