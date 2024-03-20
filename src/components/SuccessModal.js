import {View, Text, Modal, StyleSheet, Button} from 'react-native'
import Record from "./Record"
import {formatDate} from "../utils/date.utils";

const SuccessModal = (props) => {
    const handleClose = () => props.setVisible(false)

    return <Modal
        animationType="slide"
        transparent={false}
        visible={props.modalVisible}>
        <View style={styles.modalStyles}>
            <Text style={styles.headerText}>Submitted Successfully!</Text>
            <Record field="Name" value={props.formData.name}/>
            <Record field="Email" value={props.formData.email}/>
            <Record field="Date of Birth" value={formatDate(props.formData.dob)}/>
            <View style={styles.closeBtn}>
                <Button title="Close" onPress={handleClose} />

            </View>
        </View>

    </Modal>
}

const styles = StyleSheet.create({
    modalStyles: {
        marginTop: 'auto',
        marginBottom: 'auto',
        marginHorizontal: 8,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 16,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    headerText: {
        padding: 16,
        fontSize: 24,
        marginBottom: 32
    },
    closeBtn: {
        marginTop: 24,
    }
})

export default SuccessModal
