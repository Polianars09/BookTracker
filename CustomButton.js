import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function CustomButton({ title, onPress, type = 'primary' }) {
  const isDanger = type === 'danger';
  return (
    <TouchableOpacity 
      style={[styles.button, isDanger ? styles.danger : styles.primary]} 
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: { padding: 12, borderRadius: 8, alignItems: 'center', marginVertical: 6 },
  primary: { backgroundColor: '#6200ee' },
  danger: { backgroundColor: '#b00020' },
  text: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});