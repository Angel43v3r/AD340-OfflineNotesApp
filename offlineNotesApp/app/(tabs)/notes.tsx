// Notes screen list the saved notes
import React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, useColorScheme, View } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Colors } from "../../constants/theme";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { useFocusEffect } from "expo-router";

const STORAGE_KEY = '@user_notes';

export default function NotesScreen() {
    //detects if device is in dark or light mode
    const colorScheme = useColorScheme() ?? 'light';
    // Picks correct color based on light/dark theme
    const theme = Colors[colorScheme];
    // Array of all notes
    const [notes, setNotes] = React.useState([]);


    //Reload note instantly every time
    useFocusEffect(
        React.useCallback(() => {
            loadNotes();
        }, [])
    );

    //Load Notes
    const loadNotes = async () => {
        try {
            const storedNotes = await AsyncStorage.getItem(STORAGE_KEY);

            if (storedNotes !== null) {
                const parsedNotes = JSON.parse(storedNotes);
                setNotes(parsedNotes);
            }
        } catch (error) {
            console.log('Error loading notes: ', error);
        }
    };

    //Delete Notes
    const deleteNote = async (index: number) => {
        try {
            const newNotes = notes.filter((_, i) => i !== index);
            await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newNotes));
            setNotes(newNotes);
        } catch (error) {
            console.log('Error deleting notes: ', error);
        }
    };

    return (
        <View style={[styles.container, { backgroundColor: theme.secondaryBackground }]}>
            {/* TITLE */}
            <Text style={[styles.title, { color: theme.title }]}> Saved Notes </Text>

            {/* NOTES LIST */}
            {notes.length === 0 ? (
                <View style={styles.emptyNotes}>
                    <IconSymbol
                        name='square.and.pencil'
                        size={200}
                        color={theme.icon}
                    />
                    <Text style={[styles.emptyText, { color: theme.text }]}>No saved notes yet</Text>
                    <Text style={[styles.emptySubtext, { color: theme.text }]}>
                        Start writing a note and tap 'Save Note'.
                    </Text>
                </View>
            ) : (
                <FlatList
                    data={notes}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => (
                        <View style={styles.noteItem}>
                            <TouchableOpacity style={styles.deleteButton} onPress={() => deleteNote(index)}>
                                <Text style={[styles.deleteX, { color: theme.text, backgroundColor: theme.icon }]}>X</Text>
                            </TouchableOpacity>
                            <Text style={{ color: theme.text }}>{item}</Text>
                        </View>
                    )}
                />
            )}
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 80,
        justifyContent: 'center',
    },
    deleteButton: {
        position: 'absolute',
        top: 8,
        right: 8,
    },
    deleteX: {
        fontWeight: 'bold',
        fontSize: 16,
        borderWidth: 2,
        borderRadius: 4,
        justifyContent: 'center',
        padding: 2,
    },
    emptyNotes: {
        flex: 1,
        alignItems: 'center',
        marginTop: 40,
    },
    emptySubtext: {
        fontSize: 16,
        paddingTop: 8,

    },
    emptyText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingTop: 16,
    },
    noteItem: {
        padding: 16,
        marginHorizontal: 24,
        marginVertical: 8,
        borderRadius: 8,
        backgroundColor: 'rgba(0,0,0,0.1)',
        position: 'relative',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingBottom: 16,
    },
})