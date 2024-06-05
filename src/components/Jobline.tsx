import React from "react";
import { Text, View } from "react-native";

// Define the type for the user
interface User {
  ID: string;
  name: string;
}

// Define the type for the component props
interface JobLineProps {
  user: User | null;
}

export function JobLine({ user }: JobLineProps) {
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
