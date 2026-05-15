import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function PostularScreen() {

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Postular a Trabajo</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre completo"
      />

      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
      />

      <TextInput
        style={styles.input}
        placeholder="Teléfono"
      />

      <Button
        title="Enviar Postulación"
        onPress={() => alert("Postulación enviada")}
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

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5
  }

});