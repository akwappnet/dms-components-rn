import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Image, Platform, } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { calendar } from '../../images/Index';
const DmsDate = ({ initialDate, OnDateChanged }) => {
    const [date, setDate] = useState(initialDate ? new Date(initialDate) : null);
    const [dateText, setDateText] = useState('');
    const [show, setShow] = useState(false);
    // When initialDate changes and is not null, update the date and dateText
    useEffect(() => {
        if (initialDate) {
            const newDate = new Date(initialDate);
            setDate(newDate);
            setDateText(newDate.toLocaleDateString());
        }
        else {
            setDateText(''); // If no initialDate, start with a blank field
        }
    }, [initialDate]);
    const onChange = (event, selectedDate) => {
        var _a;
        console.log('Date Event', event);
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        if (currentDate) {
            setDate(currentDate);
            setDateText(currentDate.toLocaleDateString());
        }
        if (OnDateChanged) {
            OnDateChanged((_a = currentDate === null || currentDate === void 0 ? void 0 : currentDate.toLocaleDateString()) !== null && _a !== void 0 ? _a : '');
        }
    };
    const showDatePicker = () => {
        setShow(true);
    };
    return (<View style={styles.container}>
      <TextInput style={styles.input} placeholder="Select a date" value={dateText} editable={false} // Makes the text input non-editable
    />
      <TouchableOpacity onPress={showDatePicker} style={styles.button}>
        <Image source={calendar} // Replace with the path to your calendar icon
     style={styles.icon}/>
      </TouchableOpacity>
      {show && (<DateTimePicker testID="dateTimePicker" value={date || new Date()} mode={'date'} is24Hour={true} display="default" onChange={onChange} maximumDate={new Date(2300, 10, 20)} minimumDate={new Date(1950, 0, 1)}/>)}
    </View>);
};
export default DmsDate;
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#999',
        padding: 10,
        borderRadius: 5,
        flex: 1,
        marginRight: 10, // Add some margin between the input field and the button
    },
    button: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#999',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 40,
        backgroundColor: '#eee',
    },
    icon: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
    },
});
//# sourceMappingURL=DmsDate.js.map