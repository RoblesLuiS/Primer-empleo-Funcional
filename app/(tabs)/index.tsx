import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Contenedor del Logo / Ilustración */}
      <View style={styles.imageContainer}>
        <Text style={styles.logoIcon}>🎒</Text>
        <Text style={styles.logoText}>PrimerEmpleo</Text>
      </View>

      {/* Título Principal Estilizado */}
      <Text style={styles.title}>
        Primer<Text style={{ color: '#6200EE' }}>Empleo</Text>
      </Text>
      
      <Text style={styles.subtitle}>
        Conectamos tu talento con oportunidades reales sin pedirte experiencia previa.
      </Text>

      {/* Botón Principal (Morado) */}
      <TouchableOpacity 
        style={styles.buttonPrimary} 
        onPress={() => router.push("/ofertas")}
      >
        <Text style={styles.buttonTextPrimary}>Ingresar al Sistema  ➔</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>Universidad Andrés Bello • APTC106</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#FFF', 
    alignItems: 'center', 
    justifyContent: 'center', 
    padding: 24 
  },
  imageContainer: { 
    alignItems: 'center', 
    marginBottom: 30 
  },
  logoIcon: { 
    fontSize: 80 
  },
  logoText: { 
    fontSize: 16, 
    color: '#888', 
    fontWeight: '500', 
    marginTop: 10 
  },
  title: { 
    fontSize: 36, 
    fontWeight: 'bold', 
    marginBottom: 12, 
    color: '#111' 
  },
  subtitle: { 
    fontSize: 16, 
    color: '#666', 
    textAlign: 'center', 
    marginBottom: 48, 
    paddingHorizontal: 15, 
    lineHeight: 24 
  },
  buttonPrimary: { 
    backgroundColor: '#6200EE', 
    width: '100%', 
    padding: 16, 
    borderRadius: 14, 
    alignItems: 'center', 
    shadowColor: '#6200EE',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3 
  },
  buttonTextPrimary: { 
    color: '#FFF', 
    fontSize: 16, 
    fontWeight: 'bold' 
  },
  footerText: {
    position: 'absolute',
    bottom: 20,
    color: '#AAA',
    fontSize: 12
  }
});