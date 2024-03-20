import {View, Button, Text, StyleSheet} from "react-native";
import {Formik} from 'formik';
import {object, string, date} from 'yup';
import Input, {inputStyles} from "../components/Input";
import DateTimePicker from '@react-native-community/datetimepicker';
import {useState} from "react";
import SuccessModal from "../components/SuccessModal";

const Form = () => {
    const [modalVisible, setModalVisible] = useState(false)

    let initialData = {
        name: '',
        email: '',
        dob: new Date()
    }

    let validationSchema = object({
        name: string()
            .max(50, 'name expected to be less than 50 characters')
            .matches(/^[a-zA-Z]+$/, 'Please use only letters for you name')
            .required(),
        email: string().email().required(),
        dob: date().default(() => new Date())
    })
    const submitForm = () => {
        setModalVisible(true);
    }

    return (
        <View>
            <Formik
                initialValues={initialData}
                validationSchema={validationSchema}
                onSubmit={(values)=>submitForm(values)}>
                {({ handleChange, handleBlur, handleSubmit, values, setFieldValue, errors, touched }) => (
                    <View>
                        <Input
                            label="Name"
                            onChangeText={handleChange('name')}
                            onBlur={handleBlur('name')}
                            value={values.name}
                        />
                        {errors.name && touched.name && (
                            <Text style={styles.error}>{errors.name}</Text>
                        )}
                        <Input
                            label="Email"
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                        />
                        {errors.email && touched.email && (
                            <Text style={styles.error}>{errors.email}</Text>
                        )}
                        <View>
                            <Text style={inputStyles.label}>Date of Birth</Text>
                            <DateTimePicker
                                themeVariant="light"
                                style={[styles.pickerBox]}
                                value={values.dob}
                                onChange={
                                    (event, selectedDate)=>setFieldValue('dob', new Date(selectedDate))
                                }
                                maximumDate={new Date()}
                            />
                        </View>

                        <View style={styles.btnStyle}>
                            <Button onPress={handleSubmit} title="Submit" />
                        </View>

                        <SuccessModal modalVisible={modalVisible} setVisible={setModalVisible} formData={values}/>
                    </View>
                )}
            </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
    pickerBox: {
        alignSelf: "flex-start",
        width: 140,
        height: 40
    },
    btnStyle: {
        marginTop: 32,
    },
    error: {
        color: "red",
        padding: 10
    }
})
export default Form


