import { Text, View, TouchableWithoutFeedback } from "react-native";

export function Status(technicianStatus) {
  return (
    <View style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={() => onPressFunc(technicianStatus)}>
        {technicianStatus.clockedOn ? (
          <View
            style={{
              flex: 1,
              backgroundColor: "green",
              margin: 10,
              borderRadius: 10,
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>
              Current Status: {technicianStatus.IsTechIn}
            </Text>

            <Text style={{ fontWeight: "bold", fontSize: 20 }}>
              Job: {technicianStatus.jobID}
            </Text>

            <Text style={{ fontSize: 15 }}>Reg: {technicianStatus.RegNo}</Text>
            <Text style={{ fontSize: 15 }}>
              Time:{technicianStatus.TimeTaken}/{technicianStatus.TimeAllocated}
            </Text>
          </View>
        ) : (
          <View
            style={{
              flex: 1,
              backgroundColor: "red",
              margin: 10,
              borderRadius: 10,
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>
              Current Status: {technicianStatus.IsTechIn}
            </Text>
          </View>
        )}
      </TouchableWithoutFeedback>
    </View>
  );
}
