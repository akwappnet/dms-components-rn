import { View } from "react-native";
import { Dmslabel } from "./Dms/Dmslabel";

export function Header(user) {
  return (
    <View style={{ flex: 1 }}>
      {user && (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Dmslabel {...{ Textstr: "Staff: " + user.ID }} />

          <Dmslabel {...{ Textstr: "Name: " + user.name }} />
        </View>
      )}
    </View>
  );
}
