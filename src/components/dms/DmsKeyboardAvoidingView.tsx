import React, { FC } from "react";
import { KeyboardAvoidingView, Platform, View } from "react-native";

interface DmsKeyboardAvoidingViewProps {
  children: React.ReactNode;
}

const DmsKeyboardAvoidingView: FC<DmsKeyboardAvoidingViewProps> = ({
  children,
}) => {
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
};

export default DmsKeyboardAvoidingView;
