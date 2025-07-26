import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch, Picker } from 'react-native';

/*
 * Settings
 *
 * Provides controls for changing the mode, boundaries (quiet hours,
 * maximum meetings), notification preferences and AI behaviour. In this
 * simplified example we use toggles and buttons to simulate settings
 * changes. The current mode and function to update the mode are passed
 * down from the parent component.
 */

export default function Settings({ mode, setMode }) {
  const [quietHoursEnabled, setQuietHoursEnabled] = useState(true);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [aiTone, setAiTone] = useState('empathetic');
  const [decisionAutonomy, setDecisionAutonomy] = useState('medium');

  const modes = ['Assistant', 'Co‑Pilot', 'Guardian'];
  const aiTones = [
    { key: 'empathetic', label: 'Empathetic' },
    { key: 'neutral', label: 'Neutral' },
    { key: 'direct', label: 'Direct' },
  ];
  const autonomies = [
    { key: 'low', label: 'Low' },
    { key: 'medium', label: 'Medium' },
    { key: 'high', label: 'High' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>
      {/* Mode Selector */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Mode</Text>
        <View style={styles.modeRow}>
          {modes.map(m => (
            <TouchableOpacity
              key={m}
              style={[styles.modeButton, mode === m && styles.modeButtonSelected]}
              onPress={() => setMode(m)}
            >
              <Text style={[styles.modeButtonText, mode === m && styles.modeButtonTextSelected]}>
                {m}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      {/* Boundaries */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Boundaries</Text>
        <View style={styles.boundaryRow}>
          <Text style={styles.boundaryLabel}>Quiet Hours</Text>
          <Switch
            value={quietHoursEnabled}
            onValueChange={val => setQuietHoursEnabled(val)}
          />
        </View>
        <View style={styles.boundaryRow}>
          <Text style={styles.boundaryLabel}>Notifications</Text>
          <Switch
            value={notificationsEnabled}
            onValueChange={val => setNotificationsEnabled(val)}
          />
        </View>
      </View>
      {/* AI Tone */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>AI Tone</Text>
        <View style={styles.pickerRow}>
          {aiTones.map(option => (
            <TouchableOpacity
              key={option.key}
              style={[styles.toneButton, aiTone === option.key && styles.toneButtonSelected]}
              onPress={() => setAiTone(option.key)}
            >
              <Text
                style={[styles.toneButtonText, aiTone === option.key && styles.toneButtonTextSelected]}
              >
                {option.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      {/* Decision Autonomy */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>AI Decision Autonomy</Text>
        <View style={styles.pickerRow}>
          {autonomies.map(option => (
            <TouchableOpacity
              key={option.key}
              style={[styles.toneButton, decisionAutonomy === option.key && styles.toneButtonSelected]}
              onPress={() => setDecisionAutonomy(option.key)}
            >
              <Text
                style={[styles.toneButtonText, decisionAutonomy === option.key && styles.toneButtonTextSelected]}
              >
                {option.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
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
    marginBottom: 12,
    color: '#111827',
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#111827',
  },
  modeRow: {
    flexDirection: 'row',
  },
  modeButton: {
    flex: 1,
    paddingVertical: 10,
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 6,
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  modeButtonSelected: {
    backgroundColor: '#2563eb',
    borderColor: '#2563eb',
  },
  modeButtonText: {
    fontSize: 14,
    color: '#374151',
  },
  modeButtonTextSelected: {
    color: '#ffffff',
    fontWeight: '600',
  },
  boundaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  boundaryLabel: {
    fontSize: 14,
    color: '#374151',
  },
  pickerRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  toneButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 6,
    marginRight: 8,
    marginBottom: 8,
    backgroundColor: '#ffffff',
  },
  toneButtonSelected: {
    backgroundColor: '#2563eb',
    borderColor: '#2563eb',
  },
  toneButtonText: {
    fontSize: 14,
    color: '#374151',
  },
  toneButtonTextSelected: {
    color: '#ffffff',
    fontWeight: '600',
  },
});