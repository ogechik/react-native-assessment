import {StyleSheet, Text, View, Button} from 'react-native'
const MainScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Button
                title="Contact Us"
                onPress={() => navigation.navigate('ContactForm')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default MainScreen
