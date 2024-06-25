import React from "react";
import { TextInput, SafeAreaView, Dimensions, } from "react-native";
import DmsTheme from "../../utils/DmsTheme";
const windowWidth = Dimensions.get("window").width;
const Dmstext = (props) => {
    if (props.keyboardType == null) {
        props.keyboardType = "default";
    }
    if (props.secureTextEntry == null) {
        props.secureTextEntry = false;
    }
    return (<SafeAreaView style={{
            flex: 1,
            justifyContent: "center",
            paddingLeft: 10,
            alignItems: "stretch",
            backgroundColor: DmsTheme.DmsTextBackgroundColour,
            borderColor: "edf0f7",
            borderRadius: 7,
        }}>
      <TextInput placeholder={props.placeholder} placeholderTextColor={DmsTheme.DmsTextPlaceHolderTextColour} onChangeText={props.onChangeText} value={props.value} keyboardType={props.keyboardType} style={{
            color: DmsTheme.DmsTextColour,
            fontSize: 0.035 * windowWidth,
            flex: 1,
        }} maxLength={100} secureTextEntry={props.secureTextEntry} onEndEditing={props.onEndEditing}></TextInput>
    </SafeAreaView>);
};
export default Dmstext;
//# sourceMappingURL=Dmstext.js.map