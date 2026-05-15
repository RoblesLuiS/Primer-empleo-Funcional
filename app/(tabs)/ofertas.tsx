import { View, Text, StyleSheet, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function OfertasScreen() {

  const router = useRouter();

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Ofertas de Trabajo</Text>

      <Text style={styles.job}>• Asistente Administrativo</Text>
      <Text style={styles.job}>• Soporte Técnico Junior</Text>
      <Text style={styles.job}>• Practicante de Marketing</Text>
      <Text style={styles.job}>• Desarrollador Web Junior</Text>

      <Button
        title="Postular"
        onPress={() => router.push("/postular")}
      />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },

  job: {
    fontSize: 18,
    marginBottom: 10
  }

});