import React from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

// Lista de ofertas estáticas basadas en tu mockup para poblar la pantalla
const OFERTAS_DATA = [
  { id: '1', puesto: 'Asistente Administrativo', empresa: 'Empresa Alfa S.A.', modalidad: 'Presencial', ubicacion: 'Santiago Centro', renta: '$500.000' },
  { id: '2', puesto: 'Soporte Técnico Junior', empresa: 'Tech Solutions', modalidad: 'Remoto', ubicacion: 'Todo Chile', renta: '$600.000' },
  { id: '3', puesto: 'Practicante de Marketing', empresa: 'Agencia Creativa', modalidad: 'Híbrido', ubicacion: 'Providencia', renta: '$350.000' },
  { id: '4', puesto: 'Desarrollador Web Junior', empresa: 'Startup Beta', modalidad: 'Remoto', ubicacion: 'Todo Chile', renta: '$750.000' },
];

export default function OfertasScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Título de la sección como tus mockups */}
      <Text style={styles.headerTitle}>Ofertas Disponibles</Text>
      
      {/* Buscador superior */}
      <View style={styles.searchContainer}>
        <TextInput 
          style={styles.searchBar} 
          placeholder="🔍 Buscar empleos o palabras clave..." 
          placeholderTextColor="#888"
        />
      </View>

      {/* Lista Desplegable de Tarjetas */}
      <FlatList
        data={OFERTAS_DATA}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.jobTitle}>{item.puesto}</Text>
              {/* Etiqueta de modalidad */}
              <View style={styles.tagContainer}>
                <Text style={styles.modalityTag}>{item.modalidad}</Text>
              </View>
            </View>
            
            <Text style={styles.companyName}>🏢 {item.empresa} • {item.ubicacion}</Text>
            <Text style={styles.salaryText}>💰 Renta: {item.renta}</Text>
            
            {/* Botón Morado que envía los datos de la oferta seleccionada */}
            <TouchableOpacity 
              style={styles.cardButton}
              onPress={() => {
                router.push({
                  pathname: "/postular",
                  params: { puesto: item.puesto, empresa: item.empresa }
                });
              }}
            >
              <Text style={styles.cardButtonText}>Ver detalles y Postular</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    paddingHorizontal: 20, 
    backgroundColor: '#F8F9FA' // Fondo gris claro muy sutil para resaltar las tarjetas
  },
  headerTitle: { 
    fontSize: 26, 
    fontWeight: 'bold', 
    color: '#111', 
    marginTop: 50, 
    marginBottom: 15 
  },
  searchContainer: {
    marginBottom: 20
  },
  searchBar: { 
    backgroundColor: '#FFF', 
    padding: 14, 
    borderRadius: 12, 
    borderWidth: 1, 
    borderColor: '#E0E0E0', 
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 1
  },
  card: { 
    backgroundColor: '#FFF', 
    padding: 16, 
    borderRadius: 16, 
    marginBottom: 16, 
    borderLeftWidth: 5, 
    borderLeftColor: '#6200EE', // Línea lateral morada característica
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.06, 
    shadowRadius: 8, 
    elevation: 2 
  },
  cardHeader: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'flex-start', 
    marginBottom: 8 
  },
  jobTitle: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    color: '#111', 
    flex: 1, 
    marginRight: 10 
  },
  tagContainer: {
    backgroundColor: '#EFE5FF', 
    paddingHorizontal: 10, 
    paddingVertical: 4, 
    borderRadius: 8
  },
  modalityTag: { 
    color: '#6200EE', 
    fontSize: 12, 
    fontWeight: '600' 
  },
  companyName: { 
    fontSize: 14, 
    color: '#666', 
    marginBottom: 6 
  },
  salaryText: { 
    fontSize: 14, 
    fontWeight: '600', 
    color: '#2E7D32', 
    marginBottom: 14 
  },
  cardButton: { 
    backgroundColor: '#6200EE', 
    padding: 12, 
    borderRadius: 10, 
    alignItems: 'center' 
  },
  cardButtonText: { 
    color: '#FFF', 
    fontSize: 14, 
    fontWeight: 'bold' 
  }
});