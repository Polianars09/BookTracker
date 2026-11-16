import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import CustomButton from './CustomButton';

export default function AddScreen({ route, navigation }) {
  const { setBooks, books } = route.params;
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [pages, setPages] = useState('');

  const handleSave = () => {
    if (!title || !author || !pages) return;
    const newBook = {
      id: Date.now().toString(),
      title,
      author,
      pages: parseInt(pages) || 100,
      status: 'Quero ler'
    };
    setBooks([...books, newBook]);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastrar Livro</Text>
      
      <TextInput style={styles.input} placeholder="Título do livro" value={title} onChangeText={setTitle} />
      <TextInput style={styles.input} placeholder="Nome do autor" value={author} onChangeText={setAuthor} />
      <TextInput style={styles.input} placeholder="Número de páginas" keyboardType="numeric" value={pages} onChangeText={setPages} />

      <CustomButton title="Salvar Livro" onPress={handleSave} />
      <CustomButton title="Cancelar" type="danger" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f4f4f4', justifyContent: 'center' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: { backgroundColor: '#fff', padding: 12, borderRadius: 8, marginBottom: 12, borderWidth: 1, borderColor: '#ddd' }
});