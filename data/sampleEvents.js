/*
 * Sample events used by the application for demonstration purposes. In a real
 * application these would be loaded from a database or synced from the
 * user's calendar service. Each event has a unique id, title, start and
 * end time, and an optional tag describing its category (work, rest, social).
 */

export const sampleEvents = [
  {
    id: '1',
    title: 'Morning Yoga',
    startTime: '2025-07-26T08:00:00',
    endTime: '2025-07-26T09:00:00',
    tag: 'Rest',
  },
  {
    id: '2',
    title: 'Team Meeting',
    startTime: '2025-07-26T09:30:00',
    endTime: '2025-07-26T10:30:00',
    tag: 'Work',
  },
  {
    id: '3',
    title: 'Lunch with Alex',
    startTime: '2025-07-26T12:00:00',
    endTime: '2025-07-26T13:00:00',
    tag: 'Social',
  },
  {
    id: '4',
    title: 'Deep Work Block',
    startTime: '2025-07-26T14:00:00',
    endTime: '2025-07-26T16:00:00',
    tag: 'Focus',
  },
];