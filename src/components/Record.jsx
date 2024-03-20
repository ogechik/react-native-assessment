import {View, Text, StyleSheet} from "react-native";

const Record = ({field, value}) => <View style={styles.recordStyle}>
    <Text style={styles.fieldStyle}>{field}</Text>
    <Text>{value}</Text>
</View>

const styles = StyleSheet.create({
    recordStyle: {
        display: 'flex',
        flexDirection: 'row',
        width: '90%',
        borderBottomWidth: 1,
        borderColor: "black",
        padding: 4,
        marginBottom: 4
    },
    fieldStyle: {
        width: '50%',
        fontWeight: "bold"
    }
})

export default Record
