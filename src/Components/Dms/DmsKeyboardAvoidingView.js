import { KeyboardAvoidingView, Platform, View } from "react-native";

export function DmsKeyboardAvoidingView({ children }) {
  if (Platform.OS === "ios") {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        {children}
      </KeyboardAvoidingView>
    );
  } else {
    return <View style={{ flex: 1 }}>{children}</View>;
  }
}
