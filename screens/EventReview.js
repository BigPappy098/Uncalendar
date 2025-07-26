import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { sampleEvents } from '../data/sampleEvents';

/*
 * EventReview
 *
 * Allows the user to reflect on events after they occur. For each event the
 * user can select a mood (happy, neutral, sad) and enter notes about how
 * the event felt. This feedback could be used by the AI to tailor future
 * suggestions, though in this demonstration it is stored in local state.
 */

export default function EventReview({ mode }) {
  // Maintain local state for mood and notes for each event.
  const [feedback, setFeedback] = useState(
    sampleEvents.reduce((acc, ev) => {
      acc[ev.id] = { mood: null, notes: '' };
      return acc;
    }, {})
  );

  const moods = [
    { key: 'happy', label: '😊' },
    { key: 'neutral', label: '😐' },
    { key: 'sad', label: '😢' },
  ];

  const handleSelectMood = (eventId, mood) => {
    setFeedback(prev => ({ ...prev, [eventId]: { ...prev[eventId], mood } }));
  };

  const handleChangeNotes = (eventId, text) => {
    setFeedback(prev => ({ ...prev, [eventId]: { ...prev[eventId], notes: text } }));
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Review your recent events</Text>
      {sampleEvents.map(event => (
        <View key={event.id} style={styles.reviewCard}>
          <Text style={styles.eventTitle}>{event.title}</Text>
          <View style={styles.moodRow}>
            {moods.map(mood => (
              <TouchableOpacity
                key={mood.key}
                style={[
                  styles.moodButton,
                  feedback[event.id].mood === mood.key && styles.moodButtonSelected,
                ]}
                onPress={() => handleSelectMood(event.id, mood.key)}
              >
                <Text style={styles.moodLabel}>{mood.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <TextInput
            style={styles.notesInput}
            placeholder="Notes about this event..."
            value={feedback[event.id].notes}
            onChangeText={text => handleChangeNotes(event.id, text)}
            multiline
          />
        </View>
      ))}
      {/* AI Summary suggestion only for Assistant and Co‑Pilot modes */}
      {mode !== 'Guardian' && (
        <View style={styles.summaryBox}>
          <Text style={styles.summaryTitle}>AI Summary</Text>
          <Text style={styles.summaryText}>
            Based on your feedback, it seems meetings leave you feeling neutral or
            drained. Would you like to shorten future meetings or add more
            recovery time afterwards?
          </Text>
          <View style={styles.summaryActions}>
            <TouchableOpacity style={styles.summaryActionButton} onPress={() => { /* Accept recommendation */ }}>
              <Text style={styles.summaryActionText}>Add Recovery Time</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.summaryActionButton} onPress={() => { /* Dismiss recommendation */ }}>
              <Text style={styles.summaryActionText}>No Thanks</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 12,
    color: '#111827',
  },
  reviewCard: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
    color: '#111827',
  },
  moodRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  moodButton: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginRight: 8,
  },
  moodButtonSelected: {
    backgroundColor: '#dbeafe',
    borderColor: '#60a5fa',
  },
  moodLabel: {
    fontSize: 18,
  },
  notesInput: {
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 6,
    padding: 8,
    height: 60,
    textAlignVertical: 'top',
    color: '#374151',
    fontSize: 14,
  },
  summaryBox: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  summaryTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
    color: '#111827',
  },
  summaryText: {
    fontSize: 14,
    color: '#4b5563',
    marginBottom: 12,
  },
  summaryActions: {
    flexDirection: 'row',
  },
  summaryActionButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    backgroundColor: '#f3f4f6',
    marginRight: 8,
  },
  summaryActionText: {
    fontSize: 14,
    color: '#2563eb',
    fontWeight: '600',
  },
});