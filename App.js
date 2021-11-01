import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Input, NativeBaseProvider, IconButton, Icon } from "native-base"
import { Ionicons } from "@expo/vector-icons"

export default function App() {

  // States


  // Methods


  return (
    <View style={styles.container}>
      <NativeBaseProvider>
        <View style={{ marginTop: '20%', flexDirection: "row", textAlign: "center", justifyContent: "center" }}>
          <Input
            placeholder="Ingresa una categoria"
            style={{ justifyContent: "center", textAlign: "center" }}
          />
          <IconButton icon={<Icon as={Ionicons} name="send" />} />
        </View>
        <View style={{ marginTop: '15%' }}>
          <Text> Categorias añadidas</Text>
        </View>
      </NativeBaseProvider>
    </View>
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
