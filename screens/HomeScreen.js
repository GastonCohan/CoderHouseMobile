import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { Input, NativeBaseProvider, IconButton, Icon, FlatList } from "native-base"
import { Ionicons } from "@expo/vector-icons"
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {

    // States

    const [textValue, setTextValue] = useState('')
    const [itemList, setItemList] = useState([])

    const navigation = useNavigation();

    // Methods

    const handleChangeText = (value) => {
        setTextValue(value)
    }

    const HandleAddItem = () => {
        setTextValue('');
        const item = {
            value: textValue,
            id: Math.random().toString(),
        };
        setItemList([
            ...itemList,
            item
        ]);
    }

    return (
        <View style={styles.container}>
            <View>
                <NativeBaseProvider>
                    <Button
                        title="Go to Login"
                        onPress={() => navigation.navigate('Login')}
                    />
                    <View style={{ marginTop: '20%', flexDirection: "row", textAlign: "center", justifyContent: "center" }}>
                        <Input
                            placeholder="Ingresa una categoria"
                            style={{ justifyContent: "center", textAlign: "center" }}
                            onChangeText={handleChangeText}
                            value={textValue}
                        />
                        <IconButton icon={<Icon as={Ionicons} name="send" onPress={HandleAddItem} />} />
                    </View>
                    <View style={{ marginTop: '15%' }}>
                        <Text> Categorias añadidas</Text>
                        <FlatList
                            data={itemList}
                            renderItem={data => {
                                return (
                                    <View>
                                        <Text>{data.item.value}</Text>
                                        {/* <Button title="X" color="#AAAAAA" onPress={() => handleModal(data.item.id)} /> */}
                                    </View>
                                )
                            }}
                            keyExtractor={item => item.id}
                        />
                    </View>
                </NativeBaseProvider>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
