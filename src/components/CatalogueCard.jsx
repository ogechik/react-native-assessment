import {View, Text, StyleSheet, Button} from 'react-native'

const CatalogueCard = ({navigation, pokemon}) => {
    return <View style={styles.cardLayout}>
        <View>
            <Text style={styles.textStyle}>{pokemon.name}</Text>
        </View>
        <View>
            <Button
                title="view"
                onPress={() => navigation.navigate('Details', pokemon)}/>
        </View>
    </View>
}

const styles = StyleSheet.create({
    cardLayout: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 2,
        paddingLeft: 8,
        borderLeftWidth: 4,
        borderLeftColor: '#000000',
        paddingRight: 8,
        borderRightWidth: 4,
        borderRightColor: '#000000',
        backgroundColor: 'white'
    },
})

export default CatalogueCard
