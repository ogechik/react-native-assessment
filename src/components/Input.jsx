import {View, TextInput, Text, StyleSheet} from "react-native";

const Input = ({label, ...props}) => {
    return  <View>
        <Text style={inputStyles.label}>{label}</Text>
        <TextInput style={inputStyles.input} {...props} />
    </View>
}

const inputStyles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#0000ff22'
    },
    label: {
        padding: 10,
    }
});

export {inputStyles}
export default Input
