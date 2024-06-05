"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const Status = (technicianStatus) => {
    const onPressFunc = (status) => {
        // Add your press function logic here
    };
    return (<react_native_1.View style={{ flex: 1 }}>
      <react_native_1.TouchableWithoutFeedback onPress={() => onPressFunc(technicianStatus)}>
        {technicianStatus.clockedOn ? (<react_native_1.View style={{
                flex: 1,
                backgroundColor: "green",
                margin: 10,
                borderRadius: 10,
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
            }}>
            <react_native_1.Text style={{ fontWeight: "bold", fontSize: 20 }}>
              Current Status: {technicianStatus.IsTechIn}
            </react_native_1.Text>

            <react_native_1.Text style={{ fontWeight: "bold", fontSize: 20 }}>
              Job: {technicianStatus.jobID}
            </react_native_1.Text>

            <react_native_1.Text style={{ fontSize: 15 }}>Reg: {technicianStatus.RegNo}</react_native_1.Text>
            <react_native_1.Text style={{ fontSize: 15 }}>
              Time:{technicianStatus.TimeTaken}/{technicianStatus.TimeAllocated}
            </react_native_1.Text>
          </react_native_1.View>) : (<react_native_1.View style={{
                flex: 1,
                backgroundColor: "red",
                margin: 10,
                borderRadius: 10,
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
            }}>
            <react_native_1.Text style={{ fontWeight: "bold", fontSize: 20 }}>
              Current Status: {technicianStatus.IsTechIn}
            </react_native_1.Text>
          </react_native_1.View>)}
      </react_native_1.TouchableWithoutFeedback>
    </react_native_1.View>);
};
exports.default = Status;
