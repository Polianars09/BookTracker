import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function BookCard({ book, onSelect, onDelete }) {
  return (
    <View style={styles.card}>
      <TouchableOpacity style={styles.info} onPress={onSelect}>
        <Text style={styles.title}>{book.title}</Text>
        <Text style={styles.author}>Autor: {book.author} | Páginas: {book.pages}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.deleteBtn} onPress={onDelete}>
        <Text style={styles.deleteText}>✕</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { flexDirection: 'row', backgroundColor: '#fff', padding: 16, borderRadius: 8, marginVertical: 6, alignItems: 'center', elevation: 2 },
  info: { flex: 1 },
  title: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  author: { fontSize: 14, color: '#666', marginTop: 4 },
  deleteBtn: { padding: 8 },
  deleteText: { fontSize: 18, color: '#b00020', fontWeight: 'bold' },
});