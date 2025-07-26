import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/*
 * EventCard
 *
 * Displays a single event in the daily view. Shows the start and end
 * times, title and category tag. The card is intentionally simple to
 * keep the focus on the user’s time rather than fine‑grained details.
 */

export default function EventCard({ event }) {
  const start = new Date(event.startTime);
  const end = new Date(event.endTime);
  const formatTime = date =>
    `${date.getHours().toString().padStart(2, '0')}:${date
      .getMinutes()
      .toString()
      .padStart(2, '0')}`;

  return (
    <View style={styles.card}>
      <View style={styles.timeColumn}>
        <Text style={styles.timeText}>{formatTime(start)}</Text>
        <Text style={styles.timeText}>–</Text>
        <Text style={styles.timeText}>{formatTime(end)}</Text>
      </View>
      <View style={styles.detailsColumn}>
        <Text style={styles.title}>{event.title}</Text>
        {event.tag && <Text style={styles.tag}>{event.tag}</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  timeColumn: {
    width: 70,
    alignItems: 'flex-start',
  },
  timeText: {
    color: '#6b7280',
    fontSize: 12,
  },
  detailsColumn: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111827',
    marginBottom: 2,
  },
  tag: {
    fontSize: 12,
    color: '#6b7280',
  },
});