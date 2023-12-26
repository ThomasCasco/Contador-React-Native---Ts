import React, { useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { Fab } from '../components/Fab'

export const ContadorScreen = () => {
   
  const [contador,setContador] = useState(10)
  
  return (
    <View style={styles.container}>
        <Text style = {styles.textoTitulo}
        > Contador: {contador}</Text>

        <Fab 
            title="-1"
            onPress = { () => setContador(contador - 1 ) }
            position='bl'
        />
        <Fab 
            title="+1"
            onPress = { () => setContador(contador + 1 ) }
            position='br'
        />
        {/* <TouchableOpacity 
            style = {styles.fabLocationBR}
            onPress={() => setContador(contador + 1)}
        >
            <View style={styles.fab}>
                <Text style={styles.fabText}>+1</Text>
            </View>
        </TouchableOpacity> */}
    </View>
  )
}

//centralizar los estilos.
const styles = StyleSheet.create ({
    container: { 
        flex:1,
        justifyContent: 'center'
    },
    textoTitulo: {
        textAlign: 'center',
        fontSize: 40,
        marginBottom:50
    }
})

