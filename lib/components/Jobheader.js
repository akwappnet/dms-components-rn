"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const Dmslabel_1 = __importDefault(require("./dms/Dmslabel"));
const Jobheader = ({ technicianStatus, selectedJob, setSelectedJob, }) => {
    return (<react_native_1.View style={{
            height: 60,
            padding: 10,
            backgroundColor: technicianStatus.colour,
            flexDirection: "row",
            alignItems: "center",
        }}>
      {/* Back Button */}
      {!technicianStatus.clockedOn && (<react_native_1.TouchableOpacity onPress={() => setSelectedJob("")} style={styles.backButton}>
          <react_native_1.Text style={styles.backButtonText}>{"<"}</react_native_1.Text>
          {/* Simple arrow symbol as back button */}
        </react_native_1.TouchableOpacity>)}

      {/* Content */}
      {technicianStatus.clockedOn ? (<react_native_1.View style={styles.jobInfoContainerClockedOn}>
          <react_native_1.View style={styles.flexOnePaddingLeft}>
            <Dmslabel_1.default {...{
            Textstr: technicianStatus.jobID,
            fontSize: 25,
            fontWeight: "bold",
        }}/>
          </react_native_1.View>
          <react_native_1.View style={styles.flexOneAlignItemsEnd}>
            <Dmslabel_1.default {...{
            Textstr: technicianStatus.TimeTaken +
                "/" +
                technicianStatus.TimeAllocated,
            fontSize: 25,
            fontWeight: "bold",
        }}/>
          </react_native_1.View>
        </react_native_1.View>) : (<react_native_1.View style={styles.jobInfoContainer}>
          <react_native_1.View style={styles.flexOnePaddingLeft}>
            <react_native_1.Text style={styles.selectedJobText}>{selectedJob}</react_native_1.Text>
          </react_native_1.View>
        </react_native_1.View>)}
    </react_native_1.View>);
};
exports.default = Jobheader;
const styles = react_native_1.StyleSheet.create({
    backButton: {
        marginRight: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
        justifyContent: "center",
        alignItems: "center", // Center the icon/text horizontally
    },
    backButtonText: {
        fontSize: 20,
        color: "#000", // Adjust color as needed
        // You might want to adjust the font size if the button should be larger
    },
    // Other styles remain unchanged
    jobInfoContainerClockedOn: {
        flex: 1,
        flexDirection: "row",
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
    },
    jobInfoContainer: {
        flex: 1,
        flexDirection: "row",
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        marginRight: 75,
    },
    flexOnePaddingLeft: {
        flex: 1,
        paddingLeft: 10,
    },
    flexOneAlignItemsEnd: {
        flex: 1,
        alignItems: "flex-end",
        paddingRight: 10,
    },
    selectedJobText: {
        fontWeight: "bold",
        fontSize: 20,
    },
});
