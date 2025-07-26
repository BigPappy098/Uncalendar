import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/*
 * WeeklyRecap
 *
 * Provides the user with a summary of their week. A simple bar chart
 * visualizes how much time was spent on work, rest, social and unplanned
 * activities. Highlights celebrate achievements such as mindful breaks
 * or connections with friends. Upcoming events are summarized with a
 * suggestion to adjust overloaded days. In a real app, data would be
 * computed based on calendar history and user feedback.
 */

export default function WeeklyRecap({ mode }) {
  // Placeholder data for the bar chart. Each category has a label, value
  // (percentage of time) and colour. Values should sum to 100.
  const distribution = [
    { label: 'Work', value: 40, color: '#60a5fa' },
    { label: 'Rest', value: 25, color: '#6ee7b7' },
    { label: 'Social', value: 30, color: '#fcd34d' },
    { label: 'Unplanned', value: 5, color: '#fca5a5' },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Weekly Recap</Text>
      <Text style={styles.subHeader}>Week of July 20–26, 2025</Text>
      {/* Bar chart */}
      <View style={styles.chartContainer}>
        {distribution.map(item => (
          <View key={item.label} style={styles.chartRow}>
            <Text style={styles.chartLabel}>{item.label}</Text>
            <View style={styles.barBackground}>
              <View
                style={[styles.barFill, { width: `${item.value}%`, backgroundColor: item.color }]}></View>
            </View>
            <Text style={styles.chartValue}>{item.value}%</Text>
          </View>
        ))}
      </View>
      {/* Highlights */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Highlights</Text>
        <Text style={styles.bullet}>• You took 3 mindfulness breaks</Text>
        <Text style={styles.bullet}>• You connected with friends 2 times</Text>
        <Text style={styles.bullet}>• You had 8 hours of uninterrupted deep work</Text>
      </View>
      {/* Upcoming preview and suggestion */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Upcoming</Text>
        <Text style={styles.paragraph}>Monday: 6 events, 3 rest blocks</Text>
        <Text style={styles.paragraph}>Friday: 5 events, 1 rest block</Text>
        {mode !== 'Guardian' && (
          <View style={styles.suggestionBox}>
            <Text style={styles.suggestionText}>
              Friday is heavy on meetings—consider moving one or two to Monday or
              Thursday for more balance.
            </Text>
          </View>
        )}
      </View>
      {/* Encouragement */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Encouragement</Text>
        <Text style={styles.paragraph}>
          Remember: making time for rest strengthens your focus and relationships.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    padding: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  subHeader: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 16,
  },
  chartContainer: {
    marginBottom: 20,
  },
  chartRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  chartLabel: {
    width: 70,
    fontSize: 14,
    color: '#374151',
  },
  barBackground: {
    flex: 1,
    height: 12,
    backgroundColor: '#e5e7eb',
    borderRadius: 6,
    overflow: 'hidden',
    marginHorizontal: 8,
  },
  barFill: {
    height: '100%',
    borderRadius: 6,
  },
  chartValue: {
    width: 40,
    textAlign: 'right',
    fontSize: 14,
    color: '#374151',
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
    color: '#111827',
  },
  bullet: {
    fontSize: 14,
    color: '#374151',
    marginLeft: 8,
    marginBottom: 2,
  },
  paragraph: {
    fontSize: 14,
    color: '#374151',
    marginBottom: 2,
  },
  suggestionBox: {
    marginTop: 8,
    backgroundColor: '#fff7ed',
    padding: 12,
    borderRadius: 6,
    borderColor: '#fed7aa',
    borderWidth: 1,
  },
  suggestionText: {
    fontSize: 14,
    color: '#c2410c',
  },
});