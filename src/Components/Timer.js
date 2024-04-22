import { Text, View } from "react-native";
import { useEffect, useState } from "react";

export function Timer({ props }) {
  const [timer, setTimer] = useState(1);

  useEffect(() => {}, [timer]);

  return (
    <View style={{ flex: 1 }}>
      <Text></Text>
    </View>
  );
}
