import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from './CustomButton';

export default function DetailsScreen({ route, navigation }) {
  const { book } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.label}>Título do Livro:</Text>
        <Text style={styles.value}>{book.title}</Text>

        <Text style={styles.label}>Autor:</Text>
        <Text style={styles.value}>{book.author}</Text>

        <Text style={styles.label}>Número de Páginas:</Text>
        <Text style={styles.value}>{book.pages}</Text>

        <Text style={styles.label}>Status de Leitura:</Text>
        <Text style={styles.value}>{book.status}</Text>
      </View>

      <CustomButton title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f4f4f4', justifyContent: 'center' },
  card: { backgroundColor: '#fff', padding: 20, borderRadius: 8, marginBottom: 20, elevation: 3 },
  label: { fontSize: 14, color: '#666', marginTop: 10 },
  value: { fontSize: 18, fontWeight: 'bold', color: '#333', marginTop: 2 }
});