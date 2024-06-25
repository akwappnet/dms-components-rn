import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Dmslabel from "./dms/Dmslabel";
const Jobheader = ({ technicianStatus, selectedJob, setSelectedJob, }) => {
    return (<View style={{
            height: 60,
            padding: 10,
            backgroundColor: technicianStatus.colour,
            flexDirection: "row",
            alignItems: "center",
        }}>
      {/* Back Button */}
      {!technicianStatus.clockedOn && (<TouchableOpacity onPress={() => setSelectedJob("")} style={styles.backButton}>
          <Text style={styles.backButtonText}>{"<"}</Text>
          {/* Simple arrow symbol as back button */}
        </TouchableOpacity>)}

      {/* Content */}
      {technicianStatus.clockedOn ? (<View style={styles.jobInfoContainerClockedOn}>
          <View style={styles.flexOnePaddingLeft}>
            <Dmslabel {...{
            Textstr: technicianStatus.jobID,
            fontSize: 25,
            fontWeight: "bold",
        }}/>
          </View>
          <View style={styles.flexOneAlignItemsEnd}>
            <Dmslabel {...{
            Textstr: technicianStatus.TimeTaken +
                "/" +
                technicianStatus.TimeAllocated,
            fontSize: 25,
            fontWeight: "bold",
        }}/>
          </View>
        </View>) : (<View style={styles.jobInfoContainer}>
          <View style={styles.flexOnePaddingLeft}>
            <Text style={styles.selectedJobText}>{selectedJob}</Text>
          </View>
        </View>)}
    </View>);
};
export default Jobheader;
const styles = StyleSheet.create({
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
//# sourceMappingURL=Jobheader.js.map