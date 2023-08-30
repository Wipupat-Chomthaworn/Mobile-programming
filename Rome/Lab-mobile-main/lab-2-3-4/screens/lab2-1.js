import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

const Lab2_1 = ({navigation}) => {
    const but = ['Lab2.2', 'Lab3.1', 'Lab3.2', 'lab4']
    return (
      <SafeAreaView style={styles.container}>
        <View style={[{ alignItems: 'center' }, { flex: 3 }, { justifyContent: 'center' }]}>
          <Image style={{ width: 120, height: 120, margin: 20 }} source={require('../IT_Logo.png')} resizeMode='contain'/>
          <Text style={{ fontSize: 25, fontWeight: 'bold' }}>คณะเทคโนโลยีสารสนเทศ</Text>
          <Text>สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง</Text>
        </View>
  
        <View style={{ flex: 2, justifyContent: 'center' }}>
          {but.map((x) => { 
            return <View style={[{ margin: 10, width: 300, }]} key={x}>
              <Button title={x} onPress={() => navigation.navigate(x)
}/>
              </View> 
            })}
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });

export {Lab2_1}