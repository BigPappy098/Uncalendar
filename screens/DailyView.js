import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import EventCard from '../components/EventCard';
import { sampleEvents } from '../data/sampleEvents';

/*
 * DailyView
 *
 * Displays the user's schedule for the selected day. It lists events in
 * chronological order and, depending on the active mode, may show
 * suggestions for rest or focus. In a full application the date and
 * events would be dynamic and allow the user to select different days.
 */

export default function DailyView({ mode }) {
  // For demonstration we use a static list of events. In reality you
  // would fetch events for the current date from state or an API.
  const events = sampleEvents;

  // Determine if we should display an AI suggestion. The guardian mode
  // suppresses suggestions since it enforces boundaries directly.
  const showSuggestion = mode !== 'Guardian';

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.dateText}>{new Date().toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' })}</Text>
        <View style={styles.modeBadge}>
          <Text style={styles.modeBadgeText}>{mode}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.addButton} onPress={() => { /* Placeholder for add event */ }}>
        <Text style={styles.addButtonText}>+ Add Event</Text>
      </TouchableOpacity>
      <ScrollView style={styles.eventList}>
        {events.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
        {showSuggestion && (
          <View style={styles.suggestionBox}>
            <Text style={styles.suggestionTitle}>AI Suggestion</Text>
            <Text style={styles.suggestionText}>
              You have back‑to‑back commitments today. Consider scheduling a
              short break after lunch to recharge.
            </Text>
            <View style={styles.suggestionActions}>
              <TouchableOpacity style={styles.suggestionActionButton} onPress={() => { /* Accept suggestion */ }}>
                <Text style={styles.suggestionActionText}>Add Break</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.suggestionActionButton, styles.suggestionDismissButton]} onPress={() => { /* Dismiss suggestion */ }}>
                <Text style={[styles.suggestionActionText, { color: '#6b7280' }]}>Dismiss</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  dateText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
  },
  modeBadge: {
    backgroundColor: '#e5e7eb',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  modeBadgeText: {
    fontSize: 12,
    color: '#374151',
  },
  addButton: {
    alignSelf: 'flex-start',
    marginVertical: 8,
    backgroundColor: '#2563eb',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  eventList: {
    flex: 1,
    marginTop: 8,
  },
  suggestionBox: {
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
  suggestionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
    color: '#111827',
  },
  suggestionText: {
    fontSize: 14,
    color: '#4b5563',
    marginBottom: 12,
  },
  suggestionActions: {
    flexDirection: 'row',
  },
  suggestionActionButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    backgroundColor: '#f3f4f6',
    marginRight: 8,
  },
  suggestionDismissButton: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#d1d5db',
  },
  suggestionActionText: {
    fontSize: 14,
    color: '#2563eb',
    fontWeight: '600',
  },
});