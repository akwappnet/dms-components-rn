import { Text, View, TouchableWithoutFeedback } from "react-native";

interface TechnicianStatus {
  clockedOn: boolean;
  IsTechIn: string;
  jobID: string;
  RegNo: string;
  TimeTaken: string;
  TimeAllocated: string;
}

const Status: React.FC<TechnicianStatus> = (
  technicianStatus: TechnicianStatus
) => {
  const onPressFunc = (status: TechnicianStatus) => {
    // Add your press function logic here
    console.log("onPressFunc", status);
  };

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
};

export default Status;
