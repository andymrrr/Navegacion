import { StyleSheet } from "react-native";
export const ColoresGlobales ={
    primario: '#7037eb',
    secundario: '#f72585',
    terciario: '#3a0ca3',
    campletado: '#4cc9f0',
    aviso: '#fca311',
    peligro: '#e71d36',
    oscuro: '#22223b',
    blanco:"white",
  
    fondo: '#fff',
}

export const EstiloGlobales = StyleSheet.create({
    contenedor:{
        flex:1,
        padding:20,
        backgroundColor: ColoresGlobales.fondo
    },
    botonPrimario: {
        backgroundColor: ColoresGlobales.primario,
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        width: '100%',
        alignItems: 'center',
      },
    
    botonTexto: {
        color: ColoresGlobales.fondo,
        fontSize: 18,
      },
})