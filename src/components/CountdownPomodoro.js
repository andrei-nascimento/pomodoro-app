import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function CountdownPomodoro() {
    
    const [count, setCount] = useState(1500);

    useEffect(() => {
        const timer = setInterval(() => {
            setCount(count => count - 1);
        }, 1000);

        if (count <= 0) {
            setCount(0);
            clearInterval(timer);
        }

        return () => clearInterval(timer);
    }, []);
    
    return (
        <View style={styles.clock}>
                <Text style={styles.time}>
                    {Math.floor(count / 60).toString().padStart(2, '0')}:
                    {(count % 60).toString().padStart(2, '0')}
                </Text>
            </View>
    )
}

const styles = StyleSheet.create({
    clock: {
        width: 227,
        height: 227,
        borderRadius: 150,
        borderWidth: 3.5,
        borderColor: 'white',
        backgroundColor: 'transparent',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 72
    },
    time: {
        fontSize: 64,
        fontWeight: '300',
        color: 'white',
    }
});