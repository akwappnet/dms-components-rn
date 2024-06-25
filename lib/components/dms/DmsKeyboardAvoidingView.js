import React from "react";
import { KeyboardAvoidingView, Platform, View } from "react-native";
const DmsKeyboardAvoidingView = ({ children, }) => {
    if (Platform.OS === "ios") {
        return (<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
        {children}
      </KeyboardAvoidingView>);
    }
    else {
        return <View style={{ flex: 1 }}>{children}</View>;
    }
};
export default DmsKeyboardAvoidingView;
//# sourceMappingURL=DmsKeyboardAvoidingView.js.map