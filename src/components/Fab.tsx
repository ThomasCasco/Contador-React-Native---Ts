import React, { useState } from 'react'
import { View,TouchableOpacity,StyleSheet,Text } from 'react-native'

//hacer una interfaz con todas las cosas que va a usar el componente
interface Props {
  title: String,
  onPress: () => void,
  position: 'br' | 'bl'

}
//desestructuro los parametros y en el position paso uno por defecto :p
export const Fab = ({title,onPress,position = 'br'}: Props) => {
  return (
    <TouchableOpacity 
    //estilos condicionales.
    style = {[
            styles.fabLocation,
            (position === 'bl') ? styles.left : styles.right
          ]}
    onPress={onPress}
>
    <View style={styles.fab}>
        <Text style={styles.fabText}>{title}</Text>
    </View>
</TouchableOpacity>
  )
}

const styles = StyleSheet.create(
  {
    fabLocation:{
        position: 'absolute',
        bottom: 15,
        
    },
    right: {
      right:25
    },
    left: {
      left:25
    },
    fab:{
        backgroundColor: '#86A789',
        width:60,
        height:60,
        borderRadius: 100,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
    },
    fabText:{
        alignSelf: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white'
    }
  }
)