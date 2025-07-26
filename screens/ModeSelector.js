import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

/*
 * ModeSelector
 *
 * Presents three cards allowing the user to choose between Assistant,
 * Co‑Pilot and Guardian modes. When a card is selected we call the
 * provided setMode callback and navigate to the main application tabs.
 */

const modes = [
  {
    key: 'Assistant',
    title: 'Assistant Mode',
    description: 'Helpful suggestions only.',
  },
  {
    key: 'Co‑Pilot',
    title: 'Co‑Pilot Mode',
    description: 'AI triages and manages events with optional automation.',
  },
  {
    key: 'Guardian',
    title: 'Guardian Mode',
    description: 'Enforces boundaries and locks calendar for recovery.',
  },
];

export default function ModeSelector({ setMode }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.appName}>Uncalendar</Text>
      <Text style={styles.tagline}>Time is human, not transactional</Text>
      <Text style={styles.chooseText}>Choose how you’d like to use Uncalendar:</Text>
      {modes.map(mode => (
        <View key={mode.key} style={styles.card}>
          <Text style={styles.cardTitle}>{mode.title}</Text>
          <Text style={styles.cardDescription}>{mode.description}</Text>
          <TouchableOpacity
            style={styles.selectButton}
            onPress={() => setMode(mode.key)}
          >
            <Text style={styles.selectButtonText}>Select</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 24,
    backgroundColor: '#f9fafb',
    alignItems: 'center',
  },
  appName: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 24,
    marginBottom: 4,
    color: '#111827',
  },
  tagline: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 16,
  },
  chooseText: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
    color: '#374151',
  },
  card: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#111827',
  },
  cardDescription: {
    fontSize: 14,
    color: '#4b5563',
    marginBottom: 12,
  },
  selectButton: {
    alignSelf: 'flex-start',
    backgroundColor: '#2563eb',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  selectButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
});