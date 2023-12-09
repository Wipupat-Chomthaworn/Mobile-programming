import { StyleSheet, Text, View, Image, TextInput, Button, TouchableWithoutFeedback, ScrollView, TouchableOpacity, Pressable, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FIREBASE_AUTH, FIRE_STORE, storage } from '../../FirebaseConfig';
import { useDispatch, useSelector } from 'react-redux';
import { storeuserdata } from '../redux/userSlice';
import axios from 'axios';
import { getAuth } from 'firebase/auth';
import { MultipleSelectList } from 'react-native-dropdown-select-list';
import { Chip, Icon } from '@rneui/base';
import { doc, updateDoc } from 'firebase/firestore';
import * as ImagePicker from 'expo-image-picker';
import { deleteObject, getDownloadURL, ref, uploadBytes } from 'firebase/storage';
const CreateSumarize = ({ route }: any) => {
    const [showedit, setshowedit] = useState(true);
    const user = useSelector((state: any) => state.user)
    const [name, onChangeName] = useState(user.name);
    const [lastname, onChangeLastname] = useState(user.lastname);
    const [displayname, onChangeDisplayname] = useState(user.displayname);
    const [description, onChangeDescription] = useState(user.description);

    const [tagcategories, setTagCategories] = useState<object[]>([]);
    const [tag, setTagSelectedupload] = useState<object[]>([]);
    const [image, setImage] = useState("");
    const dispatch = useDispatch();

    const alltag = useSelector((state: any) => state.tagcategories)
    useEffect(() => {
        const transformedCategories = alltag.map((category: any) => ({
            id: category._id,
            value: category.tagname
        }));
        setTagCategories(transformedCategories);
    }, [alltag])

    const handleSaveProfile = () => {
        // นี่คือตำแหน่งที่คุณจะทำการบันทึกข้อมูลโปรไฟล์
    };
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result: any = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            const imgfileBlob: any = await new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest();
                xhr.onload = function () {
                    resolve(xhr.response);
                };
                xhr.onerror = function () {
                    reject(new Error('uriToBlob failed'));
                };
                xhr.responseType = 'blob';
                xhr.open('GET', result.assets[0].uri, true);
                xhr.send(null);
            });
            console.log(result.assets[0])
            const imageStorageref = ref(storage, '/Userspicture/' + user.uid);
            const picture = {
                contentType: 'image/jpeg',
            };

            const desertRef = ref(storage, `/Userspicture/${user.uid}`);

            if (user.imageuser.url === '') {
                await uploadBytes(imageStorageref, imgfileBlob, picture);
                const picturepublish = ref(storage, `/Userspicture/${user.uid}`);

                const imageUrl = await getDownloadURL(picturepublish);
                await updateDoc(doc(FIRE_STORE, "Users", user.uid), {
                    imageuser: {
                        name: user.uid,
                        url: imageUrl
                    }
                });
            }
            else {
                deleteObject(desertRef).then(async () => {
                    await uploadBytes(imageStorageref, imgfileBlob, picture);
                    const picturepublish = ref(storage, `/Userspicture/${user.uid}`);

                    const imageUrl = await getDownloadURL(picturepublish);
                    await updateDoc(doc(FIRE_STORE, "Users", user.uid), {
                        imageuser: {
                            name: user.uid,
                            url: imageUrl
                        }
                    });
                }).catch((error) => {
                    // Uh-oh, an error occurred!
                    console.log(error)
                });
            }

        }
    };

    const saveuserdata = async () => {
        setTagSelectedupload([]);
        setshowedit(true);
        const tagsInAllTag = alltag.filter((allTagItem: any) => {
            return tag.some((tagItem) => tagItem === allTagItem.tagname);
        });


        // console.log("ken" + JSON.stringify(tagsInAllTag[0]));
        const userEdited = {
            displayname: displayname,
            name: name,
            lastname: lastname,
            email: user.email,
            imageuser: {
                name: user.imageuser.name,
                url: user.imageuser.url
            },
            follower: [],
            following: [],
            tag: tagsInAllTag,
            listsumarize: user.listsumarize
        }
        // console.log(userEdited)
        // dispatch(storeuserdata(userEdited));
        try {
            const edituserData = doc(FIRE_STORE, "Users", user.uid);
            await updateDoc(edituserData, userEdited);
            alert("success")
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <ScrollView >
            <View style={styles.container}>
                <View style={styles.halfBackground}></View>
                <View>
                    <View style={styles.container}>
                        <Text style={{ marginBottom: 60, marginTop: 30, fontSize: 20, color: 'white', fontWeight: 'bold' }}>Edit Profile</Text>
                        <TouchableOpacity onPress={pickImage}>
                            <Image style={styles.NameImg} source={user.imageuser.url != "" ?{ uri: user.imageuser.url }: require('../../assets/default-avatar.png')}></Image>
                        </TouchableOpacity>
                        <Text>{user.displayname}</Text>
                        <Text style={{ alignSelf: 'flex-start', marginHorizontal: 20, fontSize: 16, fontWeight: 'bold', marginTop: 30 }}>Displayname</Text>
                        <TextInput
                            placeholder="   displayname"
                            value={displayname}
                            onChangeText={text => onChangeDisplayname(text)}
                            style={styles.input}
                        />
                        <Text style={{ alignSelf: 'flex-start', marginHorizontal: 20, fontSize: 16, fontWeight: 'bold' }}>firstname</Text>
                        <TextInput
                            placeholder="   FirstName"
                            value={name}
                            onChangeText={text => onChangeName(text)}
                            style={styles.input}
                        />
                        <Text style={{ alignSelf: 'flex-start', marginHorizontal: 20, fontSize: 16, fontWeight: 'bold' }}>lastname</Text>
                        <TextInput
                            placeholder="   LastName"
                            value={lastname}
                            onChangeText={text => onChangeLastname(text)}
                            style={styles.input}
                        />
                        <Text style={{ alignSelf: 'flex-start', marginHorizontal: 20, fontSize: 16, fontWeight: 'bold' }}>Tag</Text>
                        {user.tag.length != 0 && showedit ? <FlatList
                            contentContainerStyle={{
                                flexDirection: "row",
                                borderColor: "black",
                                borderWidth: 0.4,
                                borderRadius: 10,
                            }}
                            style={{ width: '90%', margin: 10 }}
                            data={user.tag}
                            keyExtractor={(item: any) => item._id}
                            scrollEnabled={false}
                            numColumns={4}
                            renderItem={({ item, index }: any) => (
                                <Chip onPress={() => setshowedit(false)} title={item.tagname} containerStyle={{ marginVertical: 10, borderWidth: 3, marginHorizontal: 5 }} color={"#6667AB"} titleStyle={{ color: 'white' }} />
                            )}
                        /> :
                            <View>
                                {user.tag.length == 0 ? null : <TouchableOpacity onPress={() => setshowedit(true)}><Text style={{ textAlign: 'right', color: 'red' }}>cancel</Text></TouchableOpacity>}
                                <MultipleSelectList
                                    setSelected={(val: any) => val ? setTagSelectedupload(val) : null}
                                    data={tagcategories}
                                    save="value"
                                    label="Categories"
                                    placeholder='Tag '
                                    badgeStyles={{ backgroundColor: '#6667ab' }}
                                    boxStyles={styles.selectList}
                                />
                            </View>
                        }
                        <TouchableOpacity style={styles.ButtonUpdate} onPress={() => saveuserdata()}>
                            <Text style={{ color: 'white', justifyContent: 'center', fontWeight: 'bold' }}>Update</Text>
                        </TouchableOpacity>

                        <Image style={{ width: 230, height: 266 }} source={{ uri: "https://www.blognone.com/sites/default/files/externals/255750d05125fccbe1d06e2b2ac1fa23.jpg" }} />

                        <Pressable style={styles.ButtonETC}>
                            <Text style={{ color: 'white', justifyContent: 'center', fontWeight: 'bold' }}>Change QR Code</Text>
                        </Pressable>

                        <Pressable style={styles.ButtonETC} onPress={() => FIREBASE_AUTH.signOut()}>
                            <Text style={{ color: '#6667ab', justifyContent: 'center', fontWeight: 'bold' }}>Log Out!</Text>
                        </Pressable>
                    </View>
                </View></View>
        </ScrollView>
    )
}

export default CreateSumarize

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: 375,
        height: 40,
        flexDirection: 'column',
        alignItems: 'center',
        gap: 10,
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 10,
        alignSelf: 'center',
        justifyContent: 'center',
        display: 'flex',
        padding: 5,
        margin: 15,
    },
    ButtonUpdate: {
        width: 300,
        height: 45,
        borderRadius: 10,
        margin: 20,
        backgroundColor: 'black',
        justifyContent: 'center',
        textAlign: 'center',
        alignSelf: 'center',
        alignItems: 'center',
    },
    ButtonETC: {
        width: 230,
        height: 45,
        borderRadius: 10,
        margin: 20,
        backgroundColor: 'black',
        justifyContent: 'center',
        textAlign: 'center',
        alignSelf: 'center',
        alignItems: 'center',
    },
    NameImg: {
        width: 140,
        height: 140,
        borderRadius: 360,
        borderColor: 'white',
        borderWidth: 3,
    },
    selectList: {
        margin: 10,
        width: 375,
        borderWidth: 3,
        borderColor: "gray",
        borderRadius: 10,
    },
    halfBackground: {
        position: 'absolute',
        width: '100%',
        height: 200,
        top: 0, // ตั้งค่า top เพื่อให้ตรงกับครึ่งหนึ่งของ NameImg
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(102, 103, 171, 0.6)"// สีพื้นหลังที่คุณต้องการ
    },
});