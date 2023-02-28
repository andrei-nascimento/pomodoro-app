import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Pomodoro() {
    return (
        <View style={styles.container}>

            <View style={styles.clock}>
                <Text style={styles.time}>25:00</Text>
            </View>

            <TouchableOpacity style={styles.playBtn}>
                <Icon name='play' size={30} color='#BA4949' />
            </TouchableOpacity>

            <View style={styles.stage}>
                <View style={styles.circle} />
                <View style={styles.circle} />
                <View style={styles.circle} />
                <View style={styles.circle} />
            </View>

            <Text style={styles.title}>Focus Time</Text>

            <TouchableOpacity style={styles.helpBtn}>
                <Icon name='question' size={20} color='#BA4949' />
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: '#BA4949',
    },
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
    },
    playBtn: {
        backgroundColor: 'white',
        width: 64,
        height: 64,
        borderRadius: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 5,
        marginTop: 40
    },
    stage: {
        flexDirection: 'row',
        gap: 20,
        marginTop: 40
    },
    circle: {
        width: 24,
        height: 24,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: 'white',
        backgroundColor: 'transparent',
    },
    title: {
        fontSize: 32,
        color: 'white',
        marginTop: 100
    },
    helpBtn: {
        backgroundColor: 'white',
        width: 32,
        height: 32,
        borderRadius: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 90
    }
});