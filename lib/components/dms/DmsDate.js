"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const datetimepicker_1 = __importDefault(require("@react-native-community/datetimepicker"));
const Index_1 = require("../../images/Index");
const DmsDate = ({ initialDate, OnDateChanged }) => {
    const [date, setDate] = (0, react_1.useState)(initialDate ? new Date(initialDate) : null);
    const [dateText, setDateText] = (0, react_1.useState)("");
    const [show, setShow] = (0, react_1.useState)(false);
    // When initialDate changes and is not null, update the date and dateText
    (0, react_1.useEffect)(() => {
        if (initialDate) {
            const newDate = new Date(initialDate);
            setDate(newDate);
            setDateText(newDate.toLocaleDateString());
        }
        else {
            setDateText(""); // If no initialDate, start with a blank field
        }
    }, [initialDate]);
    const onChange = (event, selectedDate) => {
        var _a;
        const currentDate = selectedDate || date;
        setShow(react_native_1.Platform.OS === "ios");
        if (currentDate) {
            setDate(currentDate);
            setDateText(currentDate.toLocaleDateString());
        }
        if (OnDateChanged) {
            OnDateChanged((_a = currentDate === null || currentDate === void 0 ? void 0 : currentDate.toLocaleDateString()) !== null && _a !== void 0 ? _a : "");
        }
    };
    const showDatePicker = () => {
        setShow(true);
    };
    return (<react_native_1.View style={styles.container}>
      <react_native_1.TextInput style={styles.input} placeholder="Select a date" value={dateText} editable={false} // Makes the text input non-editable
    />
      <react_native_1.TouchableOpacity onPress={showDatePicker} style={styles.button}>
        <react_native_1.Image source={Index_1.calendar} // Replace with the path to your calendar icon
     style={styles.icon}/>
      </react_native_1.TouchableOpacity>
      {show && (<datetimepicker_1.default testID="dateTimePicker" value={date || new Date()} mode={"date"} is24Hour={true} display="default" onChange={onChange} maximumDate={new Date(2300, 10, 20)} minimumDate={new Date(1950, 0, 1)}/>)}
    </react_native_1.View>);
};
exports.default = DmsDate;
const styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: "#999",
        padding: 10,
        borderRadius: 5,
        flex: 1,
        marginRight: 10, // Add some margin between the input field and the button
    },
    button: {
        padding: 10,
        borderWidth: 1,
        borderColor: "#999",
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        width: 40,
        height: 40,
        backgroundColor: "#eee",
    },
    icon: {
        width: 25,
        height: 25,
        resizeMode: "contain",
    },
});
