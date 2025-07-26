import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

// Import screen components
import ModeSelectorScreen from './screens/ModeSelector';
import DailyViewScreen from './screens/DailyView';
import EventReviewScreen from './screens/EventReview';
import WeeklyRecapScreen from './screens/WeeklyRecap';
import SettingsScreen from './screens/Settings';

/*
 * The main application entry point. We use a stack navigator to show the
 * mode selector on first launch. Once a mode is selected the user is
 * presented with a tab navigator containing the daily view, review,
 * recap and settings screens. The selected mode is stored in state and
 * passed down to other screens so they can tailor their behaviour.
 */

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs({ mode, setMode }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Daily') {
            iconName = 'today';
          } else if (route.name === 'Review') {
            iconName = 'rate-review';
          } else if (route.name === 'Recap') {
            iconName = 'assessment';
          } else if (route.name === 'Settings') {
            iconName = 'settings';
          }
          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Daily">
        {props => <DailyViewScreen {...props} mode={mode} />}
      </Tab.Screen>
      <Tab.Screen name="Review">
        {props => <EventReviewScreen {...props} mode={mode} />}
      </Tab.Screen>
      <Tab.Screen name="Recap">
        {props => <WeeklyRecapScreen {...props} mode={mode} />}
      </Tab.Screen>
      <Tab.Screen name="Settings">
        {props => <SettingsScreen {...props} mode={mode} setMode={setMode} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

export default function App() {
  const [mode, setMode] = useState(null);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {mode == null ? (
          <Stack.Screen name="ModeSelector">
            {props => <ModeSelectorScreen {...props} setMode={setMode} />}
          </Stack.Screen>
        ) : (
          <Stack.Screen name="MainTabs">
            {props => <MainTabs {...props} mode={mode} setMode={setMode} />}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}