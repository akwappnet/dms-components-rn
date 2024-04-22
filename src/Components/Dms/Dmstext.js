import { TextInput, SafeAreaView, Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
import DmsTheme from "./../../Utils/DmsTheme";

export function Dmstext({ props }) {
  if (props.keyboardType == null) {
    props.keyboardType = "default";
  }
  if (props.secureTextEntry == null) {
    props.secureTextEntry = false;
  }
  width: Dimensions.get("window").width;

  return (
    // <View
    //   style={{
    //     flex: 1,
    //     backgroundColor: "white",
    //     borderRadius: 7,
    //     borderWidth: 1,
    //     borderColor: "#edf0f7",
    //   }}
    // >
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        paddingLeft: 10,
        alignItems: "stretch",
        backgroundColor: DmsTheme.DmsTextBackgroundColour,
        borderColor: "edf0f7",
        borderRadius: 7,
      }}
    >
      <TextInput
        placeholder={props.placeholder}
        placeholderTextColor={DmsTheme.DmsTextPlaceHolderTextColour}
        onChangeText={props.onChangeText}
        value={props.value}
        keyboardType={props.keyboardType}
        style={{
          color: DmsTheme.DmsTextColour,
          fontSize: 0.035 * windowWidth,
          flex: 1,
        }}
        // style={{ color: "black", fontSize:12, flex: 1 }}

        maxLength={100}
        secureTextEntry={props.secureTextEntry}
        onEndEditing={props.onEndEditing}
      ></TextInput>
    </SafeAreaView>
    // </View>
  );
}
