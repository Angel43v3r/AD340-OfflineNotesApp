/**
 * Function for loading page, show for 1 second.
 */
import { router } from 'expo-router';
import { useEffect } from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, useColorScheme, View } from 'react-native';
import { Colors } from '../constants/theme';

export default function HomeScreen() {
    const colorScheme = useColorScheme() ?? 'light';
    const theme = Colors[colorScheme];

    useEffect(() => {
        const timer = setTimeout(() => {
            router.replace("/(tabs)");
        }, 1500); //show for 1.5 seconds

        return () => clearTimeout(timer);
    }, []);


    return (
        <View style={[styles.container, { backgroundColor: theme.secondaryBackground }]}>
            <Image
                source={require('../assets/images/remindly-icon.png')}
                style={[styles.icon, { backgroundColor: theme.background, borderColor: theme.icon }]}
            />
            <View style={styles.content}>
                <Text style={[styles.title, { color: theme.title }]}>
                    Remindly
                </Text>
                <Text style={[styles.subtext, { color: theme.text }]}> Notes for real life </Text>
            </View>

            <ActivityIndicator
                size="large"
                color='#686867'
                style={styles.loader}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 160,
        height: 160,
        borderRadius: 30,
        marginBottom: 8,
        borderWidth: 2,
    },
    loader: {
        marginTop: 30,
    },
    subtext: {
        fontSize: 16,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginTop: 12,
        textTransform: 'uppercase',
    },
})