import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';
import BookCard from './BookCard';
import CustomButton from './CustomButton';

const INITIAL_BOOKS = [
  { id: '1', title: 'O Pequeno Príncipe', author: 'Antoine de Saint-Exupéry', pages: 96, status: 'Lido' },
  { id: '2', title: 'Dom Casmurro', author: 'Machado de Assis', pages: 256, status: 'Lendo' },
  { id: '3', title: 'O Hobbit', author: 'J.R.R. Tolkien', pages: 310, status: 'Quero ler' },
];

export default function HomeScreen({ navigation }) {
  const [books, setBooks] = useState(INITIAL_BOOKS);
  const [search, setSearch] = useState('');
  const [filteredBooks, setFilteredBooks] = useState(INITIAL_BOOKS);

  useEffect(() => {
    const result = books.filter(b => b.title.toLowerCase().includes(search.toLowerCase()));
    setFilteredBooks(result);
  }, [search, books]);

  const handleDelete = (id) => {
    setBooks(books.filter(b => b.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Minha Biblioteca 📚</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Filtrar livro por nome..."
        value={search}
        onChangeText={setSearch}
      />

      <CustomButton 
        title="Adicionar Novo Livro" 
        onPress={() => navigation.navigate('Add', { setBooks, books })} 
      />

      <FlatList
        data={filteredBooks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <BookCard 
            book={item} 
            onSelect={() => navigation.navigate('Details', { book: item })} 
            onDelete={() => handleDelete(item.id)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f4f4f4' },
  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 12, textAlign: 'center', color: '#333' },
  input: { backgroundColor: '#fff', padding: 10, borderRadius: 8, marginBottom: 12, borderWidth: 1, borderColor: '#ddd' }
});