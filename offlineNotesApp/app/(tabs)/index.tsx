/**
 * Homepage Screen
 */

import React from 'react';
import { Image, Keyboard, Pressable, StyleSheet, Text, TextInput, useColorScheme, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Colors } from '../../constants/theme';

const STORAGE_KEY = '@user_notes';

export default function HomeScreen() {
  //detects if device is in dark or light mode
  const colorScheme = useColorScheme() ?? 'light';
  // Picks correct color based on light/dark theme
  const theme = Colors[colorScheme];
  // stores what user is currently typing (current input text)
  const [text, setText] = React.useState('');

  //Save Notes to AsyncStorage
  const saveNote = async () => {
    // Do not save empty notes
    if (!text.trim()) {
      return;
    }

    try {
      // Get existing notes
      const storedNotes = await AsyncStorage.getItem(STORAGE_KEY);

      //Convert stored string back into array
      const notes = storedNotes ? JSON.parse(storedNotes) : [];

      //Add new note
      const newNotes = [...notes, text];

      //save  updated notes array
      await AsyncStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(newNotes)
      );

      //Clear input field
      setText('');
      //dimiss keyboard once note is saved
      Keyboard.dismiss();

    } catch (error) {
      console.log('Error saving notes: ', error)
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.secondaryBackground }]}>
      <View style={styles.header}>
        {/* ICON */}
        <Image
          source={require('../../assets/images/remindly-logo.png')}
          style={styles.icon}
        />
        {/* TITLE */}
        <Text style={[styles.title, { color: theme.title }]}>
          Remindly
        </Text>
      </View>

      {/* INPUT AREA */}
      <View style={styles.content}>
        <TextInput
          style={[styles.inputText, { color: theme.text }]}
          onChangeText={setText}
          value={text}
          placeholder='Enter your notes here...'
          placeholderTextColor={theme.secondaryText}
          multiline={true}
          textAlignVertical='top'
        />

        {/* SAVE BUTTON */}
        <Pressable
          onPress={saveNote}
          style={({ pressed }) =>
            [styles.button, { backgroundColor: pressed ? theme.title : theme.icon, opacity: pressed ? 0.7 : 1, },]
          }>
          <Text style={[styles.buttonText, { color: theme.text }]}>Save Note</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  container: {
    flex: 1,
    paddingTop: 80,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    gap: 16,
    paddingTop: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  icon: {
    width: 32,
    height: 32,
  },
  inputText: {
    fontSize: 16,
    fontWeight: '600',
    borderWidth: 1,
    padding: 12,
    width: '80%',
    borderRadius: 8,
    minHeight: 300,
  },
  savedText: {
    marginTop: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})