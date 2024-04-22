import { Text, View } from "react-native";
// var logo = require("../Images/navlogosimple.png");

export function jobLine() {
  return (
    <View style={{ flex: 1 }}>
      {user && (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text>Staff: {user.ID}</Text>
          <Text>{user.name}</Text>
        </View>
      )}
    </View>
  );
}
