import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function Alumno(props) {
  const [mostrarMatricula, setMostrarMatricula] = useState(false);

  return (
    <View style={styles.contenedorPadre}>
      <View style={styles.filaPrincipal}>
        {/* Círculo con Imagen de Internet */}
        <View style={styles.circuloImagen}>
          <Image 
            source={{ uri: props.foto }} 
            style={styles.fotoPerfil} 
          />
        </View>

        <View style={styles.contenedorTexto}>
          <Text style={styles.nombre}>{props.nombre}</Text>
        </View>

        <TouchableOpacity 
          style={styles.boton} 
          onPress={() => setMostrarMatricula(!mostrarMatricula)}
        >
          <Text style={styles.textoBoton}>
            {mostrarMatricula ? 'Ocultar' : 'Ver'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Matrícula que aparece abajo */}
      {mostrarMatricula && (
        <View style={styles.infoExtra}>
          <Text style={styles.matricula}>Matrícula: {props.matricula}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  contenedorPadre: {
    backgroundColor: '#8bb6b4',
    marginHorizontal: 15,
    marginVertical: 6,
    borderRadius: 12,
    padding: 10,
    elevation: 3,
  },
  filaPrincipal: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  circuloImagen: {
    width: 55,
    height: 55,
    borderRadius: 27.5,
    backgroundColor: '#eee',
    overflow: 'hidden',
  },
  fotoPerfil: {
    width: '100%',
    height: '100%',
  },
  contenedorTexto: { flex: 1, marginLeft: 15 },
  nombre: { fontSize: 14, fontWeight: 'bold' },
  boton: { backgroundColor: '#460846e3', padding: 8, borderRadius: 5 },
  textoBoton: { color: 'white', fontSize: 12 },
  infoExtra: { 
    marginTop: 10, 
    borderTopWidth: 1, 
    borderColor: '#eee', 
    paddingTop: 5,
    alignItems: 'center' 
  },
  matricula: { color: '#666', fontWeight: 'bold' }
});