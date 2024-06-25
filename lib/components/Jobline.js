import React from "react";
import { Text, View } from "react-native";
export function JobLine({ user }) {
    return (<View style={{ flex: 1 }}>
      {user && (<View style={{ flex: 1, justifyContent: "center" }}>
          <Text>Staff: {user.ID}</Text>
          <Text>{user.name}</Text>
        </View>)}
    </View>);
}
//# sourceMappingURL=Jobline.js.map