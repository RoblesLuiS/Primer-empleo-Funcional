import { View, Text, StyleSheet, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {

  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Primer Empleo App</Text>
      <Text style={styles.subtitle}>
        Encuentra tu primera oportunidad laboral
      </Text>

      <Button
        title="Ver Ofertas"
        onPress={() => router.push("/ofertas")}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
});